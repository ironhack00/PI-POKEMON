const { Pokemon, Type } = require('../../db')

const postPokemon = async({name, life, attack, defending, speed, hight, weight, listType})=>{

    

    let pokemonCreate = await Pokemon.create({
        name,
        life,
        attack,
        defending,
        speed,
        hight,
        weight,
    });
    console.log("types: ",listType[0])
            for(let i = 0; i < listType.length; i++){
                let typeBd = await Type.findAll({
                    where:{name: listType[i]}
                })
                pokemonCreate.addType(typeBd);
            }
            
            
        
        
        
        console.log('poquemon creado', pokemonCreate)
    
    

    

    return(pokemonCreate)

}

module.exports = {postPokemon}