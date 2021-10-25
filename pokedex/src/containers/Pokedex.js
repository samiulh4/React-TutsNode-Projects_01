import React, {useEffect, useState} from "react";
import {Box, CircularProgress} from '@material-ui/core';
import axios from 'axios';
import {POKEMON_API_URL, IMAGE_API_URL} from '../config';


function Pokedex()
{
    const [pokemonData, setPokemonData] = useState(null)
    // Hook, Work Like Component Did Mount
    useEffect(() =>{
        // Http Client
        axios.get(POKEMON_API_URL+"?limit=8").then((response) => {
            if(response.status >= 200 && response.status < 300){
                const { results } = response.data
                let newPokemonData = []
                results.forEach((pokemon, index) => {
                    index++
                    let pokemonObject = {
                        id: index,
                        url:IMAGE_API_URL + index + ".png",
                        name: pokemon.name
                    }
                    newPokemonData.push(pokemonObject)
                });
                setPokemonData(newPokemonData)
            }
        })
    }, [])
    return(
       <Box>
           {pokemonData ? pokemonData.map((pokemon) =>{
               return <h1>{pokemon.name}</h1>
           }) : <CircularProgress style={{ marginTop: 100 }}/>}
       </Box>
    )
}

export default Pokedex;