const { getAllInfo } = require('./getAllInfo'); 

const getNamePokemon = async(name)=>{
    const getInfo = await getAllInfo();
    //console.log(getInfo);
    const pokemonName = getInfo.find( ele=> ele.name === name);
    if(pokemonName) return pokemonName;
    else return 'no tenemos ese pokemon registrado'
    
};

module.exports = {getNamePokemon};
