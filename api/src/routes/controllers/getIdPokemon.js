const axios = require('axios');
const { Pokemon, Type } = require('../../db');
const { getApiInfo } = require('./getAllInfo');
const {  bdResponse } = require('./getAllInfo');

const getIdPokemon = async id =>{
    /* console.log("almenos entro", id)
    if( id.length > 15 ){
        console.log("sigue entrando")
        let bdInfo = await Pokemon.findAll({
            include:{
                model: Type,
                attributes:["name"],
                through:{
                    attributes:[],
                },
            }
        })  
        console.log(idPokemon)
        let idPokemon = bdInfo.find(ele => ele.id === id)
        console.log(idPokemon)
        return idPokemon; */
        if(id.length > 15){
            let bdInfo = await bdResponse();
            let idPokemon = bdInfo.find(ele => ele.id === id)
            console.log("y bueno", idPokemon)
            return idPokemon;
   
    } else{
     
        const apInfo  = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        console.log(apInfo.data)
        return apInfo.data;
    
    }
}

module.exports = { getIdPokemon }