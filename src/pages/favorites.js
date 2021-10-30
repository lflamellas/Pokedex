import axios from 'axios'
import React,{useState, useEffect} from 'react'
import {Routes, useHistory} from 'react-router-dom'
import Pokecard from '../components/pokecard'

const Favorites = (props) => {


  let history = useHistory()
  const [pokemons, setPokemon] = useState([])

  useEffect(() => {
      axios.get(`https://pokedex20201.herokuapp.com/users/${props.match.params.name}`)
        .then((response) => {
            setPokemon(response.data.pokemons)
        })
  },[])

  const Deletar = (name) => {
    const user = JSON.parse(localStorage.getItem('app-token'))
    axios.delete(`https://pokedex20201.herokuapp.com/users/${user}/starred/${name}`)
      .then(() => {
        let username = JSON.parse(localStorage.getItem('app-token'))
        history.push({pathname:`/favoritos/${username}`, state:{name}})
      })
  }

  return(
    <div>
      <h1>Pokecards</h1>
      {
        (pokemons !== [] &&
          pokemons.map((element) => (
            <div key={element.id} onClick={() => history.push(`/pokemon/${element.name}`)}>
              <h2>{element.name}</h2>
              <img src={element.image_url}></img>
              <button onClick={() => Deletar(element.name)}>Deletar</button>
            </div>
          ))
        )
      }

    </div>
    );
}

export default Favorites;