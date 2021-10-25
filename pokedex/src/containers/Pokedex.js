import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid,makeStyles } from "@material-ui/core";
import axios from "axios";
import { POKEMON_API_URL, IMAGE_API_URL } from "../config";
import PokemonCard from "../components/PokemonCard";


const useStyles = makeStyles((theme) => ({
    pokedexContainer:{
        textAlign: 'center',
        padding: "70px 10px 0px 10px",
        backgroundColor: 'rgb(68, 68, 68)'
    }
}))




function Pokedex() {
  const classes = useStyles();  
  const [pokemonData, setPokemonData] = useState(null);
  // Hook, Work Like Component Did Mount
  useEffect(() => {
    // Http Client
    axios.get(POKEMON_API_URL + "?limit=100").then((response) => {
      if (response.status >= 200 && response.status < 300) {
        const { results } = response.data;
        let newPokemonData = [];
        results.forEach((pokemon, index) => {
          index++;
          let pokemonObject = {
            id: index,
            url: IMAGE_API_URL + index + ".png",
            name: pokemon.name,
          };
          newPokemonData.push(pokemonObject);
        });
        setPokemonData(newPokemonData);
      }
    });
  }, []);
  return (
    <Box>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {pokemonData.map((pokemon) => {
            return (
                <PokemonCard pokemon={pokemon} image={pokemon.url} key={pokemon.id}/>
            )
          })}
        </Grid>
      ) : (
        <CircularProgress style={{ marginTop: 100 }} />
      )}
    </Box>
  );
}

export default Pokedex;
