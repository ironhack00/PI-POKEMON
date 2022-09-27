const axios = require('axios');
const { Type } = require("../../db");

const getType = async()=>{

    let Types = await axios.get('https://pokeapi.co/api/v2/type');
    console.log(Types.data)
    Types.data.results.map( ele =>{
        console.log(ele.name)
        Type.findOrCreate({
            where:{name: ele.name}
        })
    
    } );

    const allTypes = await Type.findAll();

    return allTypes;

}

module.exports = {getType}