import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';
export const FILTER_NAME = 'FILTER_NAME';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';
export const GET_TYPE = 'GET_TYPE';
export const FILTER_AZ = 'FILTER_AZ';
export const FILTER_SCORE = 'FILTER_SCORE';
export const FILTER_BD = "FILTER_BD";
export const POKEMON_DETAIL = "POKEMON_DETAIL";
export const  POST_POKEMON = "POST_POKEMON";

export const getPokemons = ()=>{
    return async(dispatch) =>{
        let json = await axios.get('http://localhost:3001/pokemons');
        return dispatch({
            type: GET_POKEMONS,
            payload: json.data
        })
    }
};

export const filterName = (payload)=>{
    return {
        type: FILTER_NAME,
        payload: payload 
    }
}

export const filterByType = (payload)=>{
    return {
        type: FILTER_BY_TYPE,
        payload: payload 
    }
}

export const getType = ()=>{
    return async(dispatch) =>{
        let json = await axios.get('http://localhost:3001/type');
        console.log("action", json.data)
        return dispatch({
            type: GET_TYPE,
            payload: json.data
        })
    }
}

export const filterAz = (payload) =>{
    console.log('action: ', payload)
    return{
        type: FILTER_AZ,
        payload: payload
    }
}

export const filterScore = (payload) =>{
    return{
        type: FILTER_SCORE,
        payload: payload
    }
}

export const filterBd = (payload) =>{
    return{
        type: FILTER_BD,
        payload: payload
    }
}

export const pokemonDetail = (payload)=>{
    return async(dispatch) =>{
        let json = await axios.get(`http://localhost:3001/pokemons/${payload}`);
        return dispatch({
            type: POKEMON_DETAIL,
            payload: json.data
        })
    }
}


export const postPokemon = (payload) =>{
    return async (dispatch) =>{
        let json = await axios.post('http://localhost:3001/pokemons',payload);
        //console.log(json)
        return dispatch({
            type: POST_POKEMON,
            payload : json.data
        }) 
    }
}
