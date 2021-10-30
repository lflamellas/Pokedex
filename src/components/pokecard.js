import axios from 'axios'
import React,{useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import "../styles/pokecard.css"

const Pokecard = () => {

  let {name} = useParams()
  const [pokemons, setPokemon] = useState([])

  useEffect(() => {
    axios.get(`https://pokedex20201.herokuapp.com/pokemons/${name}`)
      .then(response => {
        // console.log(response);
        setPokemon(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  },[])

  return(
    <div>
      <h1>Pokecards</h1>
      {
        (pokemons !== [] &&
          <div key={pokemons.id}>
            <h2>{pokemons.name}</h2>
          </div>
        )
      }
    </div>
    );
}

export default Pokecard;