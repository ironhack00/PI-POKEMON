import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { pokemonDetail } from '../../actions/actions'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom';
import styles from './detail.module.css';

export const PokemonDetail = ()=>{

    const dispatch = useDispatch();
    let params = useParams();

    useEffect( ()=>{
        let id = params.idPokemon;
        console.log(id)
        dispatch(pokemonDetail(id));
        return ()=>  pokemon = {
            name:"",
            animation:"",
            speed:""
        }

    },[]);

    let pokemon = useSelector( state => state.pokeDetail) 
    /* console.log("animacion: ", pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default) */
    let { name, animation, weight, height, speed, defense, attack, life, type, id} = pokemon;
    console.log("esto es type:", type)
    console.log(pokemon)
    return(
    
        <div>
            
            <div className={styles.orden}>
                <Link to={'/Home'} className={styles.home}>Home</Link>
                <h1>{name}</h1>
                <p>ID {id}</p>
                <img src={animation} alt="y bueno" className={styles.img}/>
                <p>WEIGHT {weight}</p>
                <p>HEIGHT {height}</p>
                <p>SPEED {speed}</p>
                <p>DEFENSE {defense}</p>
                <p>ATTACK {attack}</p>
                <p>LIFE {life}</p>
                <p>TYPE {type}</p>
                {/* {type.map(e=>{<p>e</p>})} */}
            </div>
        </div>
    
    )
}

/* {pokemon.sprites.other.dream_world.front_default} */