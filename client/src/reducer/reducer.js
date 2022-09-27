import { GET_POKEMONS, FILTER_NAME, FILTER_BY_TYPE, GET_TYPE, FILTER_AZ, FILTER_SCORE, FILTER_BD, POKEMON_DETAIL, POST_POKEMON } from '../actions/actions'

const initialState = {
    pokemons: [],
    types: [],
    pokeDetail:{},
    allPokemons:[]
}

function rootReducer(state = initialState, action ){
    switch ( action.type ){

        case GET_POKEMONS:
            console.log('state allpokemons: ', state.allPokemons.length)
            if(state.allPokemons.length){
                return{
                    ...state,
                    pokemons: state.allPokemons,
                    //allPokemons: action.payload
                } 
            }else{
                return{
                    ...state,
                    pokemons: action.payload,
                    allPokemons: action.payload
                }

            }
        case GET_TYPE:
            console.log("types de pokemon", action.payload)
            return{
                ...state,
                types: action.payload
            } 
            
        case FILTER_NAME:
            let poke = state.allPokemons;
            let result = poke.filter(ele => ele.name === action.payload)
            if(!result.length){ 
            return{
                ...state, 
                pokemons: [{name:("no tenemos ese poquemon")}] 
            } }
            console.log('result => ',state.pokemons)
            return{
                ...state,
                pokemons: result
            }

        case FILTER_BY_TYPE:
            let alpoke = state.allPokemons;
            //console.log(alpoke[0].types)
            if(action.payload === "all"){
                console.log(action.payload)
                return{
                    ...state,
                    pokemons: state.allPokemons
                }
            }
            let res = alpoke.filter(element =>{
                console.log(element)
                //if(element){
                    if(element.types){
                        return element.types.includes(action.payload)
                    }
                //}        
            })
            console.log("esto es el filtro por typos ",res)
            return{
                ...state,
                pokemons: res
            }

            case FILTER_AZ:
                const al = state.pokemons;
                const resul = action.payload === 'asc'? al.sort((a,b)=>{
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return 1;
                    }
                    if(b.name.toLowerCase() > a.name.toLowerCase()){
                        return -1;
                    }
                    return 0;
                }): al.sort((a,b)=>{
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return -1;
                    }
                    if(b.name.toLowerCase() > a.name.toLowerCase()){
                        return 1;
                    }
                    return 0;
                })
                console.log(resul)
                return{
                    ...state,
                    pokemons: [...resul]
                }

                case FILTER_SCORE:
                    const all = state.pokemons;
                    const score = action.payload === "descScpre"? all.sort((a,b)=>a.attack - b.attack):all.sort((a,b)=> b.attack - a.attack )
                    return{
                        ...state,
                        pokemons: [...score] 
                    }

                case FILTER_BD:
                    const filt = state.allPokemons;
                    const fil = action.payload === 'yes' ? filt.filter( e => e.createInDb ) : filt.filter( e => !e.createInDb )
                    return{
                        ...state,
                        pokemons: [...fil] 
                    }  

                case POKEMON_DETAIL:
                    console.log('detalles del pokemon: ', action.payload);
                    let obj = !action.payload.createInDb ? 
                     {
                        name: action.payload.name,
                        animation: action.payload.sprites.versions["generation-v"]["black-white"].animated
                        .front_default,
                        weight: action.payload.weight, 
                        height: action.payload.height,
                        speed:  action.payload.stats[5].base_stat,
                        defense: action.payload.stats[2].base_stat,
                        attack: action.payload.stats[1].base_stat,
                        life: action.payload.stats[0].base_stat,
                        type: action.payload.types.map((t) => t.type.name),
                        id: action.payload.id
                    } : {
                        name: action.payload.name,
                        speed: action.payload.speed,
                        weight: action.payload.weight,
                        attack: action.payload.attack,
                        life: action.payload.life,
                        defense: action.payload.defending,
                        height: action.payload.hight
                        ,
                        type: action.payload.Types.map(e => e.name),
                        id: action.payload.id
                    }
                    console.log("obj final: ",obj)
                    return{
                        ...state,
                        pokeDetail: obj
                    }

                    case POST_POKEMON:
                    return{
                       ...state,
                       allPokemons: [...state.allPokemons, action.payload] 
                    }


        default:
            return state;

    }
}

export default rootReducer;