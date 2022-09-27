const axios = require('axios');
const { Pokemon, Type } = require('../../db');


/* const getApiInfo = async(url)=>{
    
    let arr = [];
    const res = await axios.get(url);
    const result = res.data.results;
    const next = res.data.next;
    cont = cont + arr.length;
    console.log(cont)
    if(next !== null ){
        let arregloo = result.map(async ele=>{
            return{
                name: ele.name,
                url: ele.url

            }
        })
        arr = await getApiInfo(next);
        arr = [...arr, ...arregloo];
    }else if(next === null){
        let arreglo = result.map(ele=>{
            return{
                name: ele.name,
                url: ele.url
            }
        })
        //console.log('arreglo', arreglo)
        return arreglo;
    }
    console.log(arr)
    return arr;
} */

//let infoPoke = async(url)=>{
//
//    let a = await axios.get(url);
//    //console.log(a.data.id);
//    return a.data;
//} 



//const getApiInfo = async(url)=>{
//    const res = await axios.get(`${url}?limit=40`);
//    //const result = res.data.results;
//    
//    const pokemones = await res.data.results.map( async ele=>{
//        //let p = await infoPoke(ele.url)
//        //console.log(p.id)
//        return axios.get(ele.url);
//        /* return{
//            name: ele.name,
//            //id: p.id
//        } */
//    } )
//    const pokemonesFinales = Promise.all(pokemones)
//    console.log(pokemonesFinales)
    //return result;
//}

const getApiInfo = async () => {
    const apiUrl = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=40");
    const results = apiUrl.data.results

    const pokemonInfo = []
    
    for(let i = 0 ; i < results.length ; i++){
      const pokes = await axios.get(results[i].url);
      const pokeInfo = pokes.data;

      pokemonInfo.push({
        id: pokeInfo.id,
        name: pokeInfo.name,
        types: pokeInfo.types.map((t) => t.type.name),
        img: pokeInfo.sprites.other['official-artwork'].front_default,
        attack: pokeInfo.stats[1].base_stat,
        weight: pokeInfo.weight,
        height: pokeInfo.height
      });
    }
    
    return pokemonInfo;
}

const bdResponse = async() =>{
    //console.log('chau')
    return  await Pokemon.findAll({
        include:{
            model: Type,
            attributes:["name"],
            through:{
                attributes:[],
            },
        }
    })
    
}

const getAllInfo = async()=>{

    const Api = await getApiInfo();
    const Bd = await bdResponse();
    //console.log(Bd)

    const infoTotal = [...Api,...Bd];
    console.log(infoTotal)

    return infoTotal;

}

module.exports = {getAllInfo, bdResponse}