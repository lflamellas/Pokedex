import axios from 'axios'
import React,{useState, useEffect} from 'react'
import {Routes, useHistory, useParams} from 'react-router-dom'
import Pokecard from '../components/pokecard'
import '../styles/mainpage.css'

const Mainpage = () => {


  let history = useHistory()
  let {name} = useParams()
  const [pokemons, setPokemon] = useState([])
  const [previousPage, setPreviousPage] = useState({})
  const [nextPage, setNextPage] = useState({})

  const Favoritar = () => {
    const username = JSON.parse(localStorage.getItem('app-token'))
    axios.post(`https://pokedex20201.herokuapp.com/users/${username}/starred/${name}`)
      .then(() => {
        let username = JSON.parse(localStorage.getItem('app-token'))
        history.push({pathname:`/favoritos/${username}`, state:{name}})
      })
      .catch((error) => console.log(error))
  }
  
  const loadPokemons = (page = 1) => {
    axios.get(`https://pokedex20201.herokuapp.com/pokemons?page=${page}`)
      .then(response => {
        setPokemon(response.data.data)
        setPreviousPage(response.data.prev_page)
        setNextPage(response.data.next_page)
      })
  }

  useEffect(() => {
    loadPokemons()
  },[])

  const navigate = (page) => {
    if(page !== null) loadPokemons(page)
  }

  return(
    <div>
      <h1 className="mainTitle">Pokecards</h1>
      <div className="mainFrame">
      {
        (pokemons !== [] &&
          pokemons.map((element) => (
            <div className="pokeCard" key={element.id}>
              <h2 className="pokeName">{element.name}</h2>
              <div className="pokeImgDiv">
              <img className="pokeImg" src={element.image_url}></img>
              {/* <button onClick={Favoritar(element.name)}>Favoritar</button> */}
              </div>
            </div>
          ))
        )
      }

      </div>
      <footer>
        <button className="prevPage" onClick={() => navigate(previousPage)}>Anterior</button>
        <span className="currPage">Página {nextPage - 1}</span>
        <button className="nextPage" onClick={() => navigate(nextPage)}>Próxima</button>
      </footer>
    </div>
    );
}

export default Mainpage;