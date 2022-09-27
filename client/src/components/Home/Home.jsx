import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, filterName, filterByType, getType, filterAz, filterScore, filterBd } from "../../actions/actions";
import { Card } from "../Card/Card";
import { Paginado } from '../Paginado/Paginado';
import { Link } from "react-router-dom";
import styles from "../Home/Home.module.css"
import { Loading } from "../Loading/Loading";


export const Home = ()=>{

    const [inputn, setInput] = useState('');
    
    const [errors,setErrors]=useState({});

    let allPokemons = useSelector( state => state.pokemons );
    let allTypes = useSelector( state => state.types );
    console.log("holis ",allTypes);

    //PAGINADO

    const [currentPage, setCurrentPage] = useState(1);
    const [charactersPerPage, setCharactersPerPage] = useState(12);
    const indexOfLasCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLasCharacter - charactersPerPage;
    const currentCharacters = allPokemons.slice(indexOfFirstCharacter,  indexOfLasCharacter  );
    console.log(indexOfFirstCharacter,indexOfLasCharacter)
    const paginado = (pageNumber)=>{
        setCurrentPage(pageNumber);
    }



    const dispatch = useDispatch();

    useEffect( ()=>{
        if(!allPokemons.length){
            dispatch(getPokemons());
        }else{
            dispatch(filterByType('all'))
        }
        
        dispatch(getType());
    },[dispatch]);
    
    

    const handeName = (e)=>{
        e.preventDefault();
        if(inputn.length){
            dispatch(filterName(inputn))
        }
    }
    
    const change = (e)=>{
            setInput(e.target.value)   
    }   

    const handeFilterType = (e)=>{
        e.preventDefault();
        dispatch(filterByType(e.target.value));
        setCurrentPage(1)
    }

    const handeFilterAZ = (e)=>{
        e.preventDefault();
        dispatch(filterAz(e.target.value));
        setCurrentPage(1)
    }

    const handeFilterScore = (e)=>{
        e.preventDefault();
        dispatch(filterScore(e.target.value))
        setCurrentPage(1)
    }

    const handeFilterBd = (e) =>{
        e.preventDefault();
        dispatch(filterBd(e.target.value))
        setCurrentPage(1)
    }
    console.log("estilos", styles)
    return( 
        
        <div >  
            {
                !allPokemons.length && <Loading/>
            }
            <div className={styles.backGround}></div>
            <Link to={'/pokemon/post'}>
                <h2>Post Pokemon</h2>
            </Link>

             <input  placeholder="ingrese un Pokemon" name='name' value={inputn} onChange={e=>change(e)} />
             {
                inputn.length > 2 ? <button onClick={(e)=>handeName(e)}>BUSCAR X NOMBRE</button> : null
             }
             
             {/* <select>
                {
                    allTypes && allTypes.map(e=>{
                       
                        <option value={e.name}>{e.name}</option>
                    })
                }
             </select> */} 

            <select onChange={ e => handeFilterScore(e)}>
                <option value="ascScore">Score +</option>
                <option value="descScpre">Score -</option>
            </select>

             <select onChange={ e => handeFilterType(e)}>
                <option value="all">All</option>
                <option value="flying">FLYING</option>
                <option value="normal">NORMAL</option>
                <option value="fighting">FIGHTING</option>
                <option value="poison">POSION</option>
                <option value="ground">GROUND</option>
                <option value="rock">ROCK</option>
                <option value="bug">BUG</option>
                <option value="ghost">GHOST</option>
                <option value="steel">STEEL</option>
                <option value="fire">FIRE</option>
                <option value="water">WATER</option>
                <option value="grass">GRASS</option>
                <option value="electric">ELECTRIC</option>
                <option value="psychic">PSYCHIC</option>
                <option value="ice">ICE</option>
                <option value="dragon">DRAGON</option>
                <option value="dark">DARK</option>
                <option value="fairy">FAIRY</option>
                <option value="unknown">UNKNOWN</option>
                <option value="shadow">SHADOW</option>

            </select>
            
            <select onChange={ (e) => handeFilterBd(e)} >
                <option value={"yes"}>YES</option>
                <option value={'no'}>NO</option>
            </select>

            <select onChange={ (e) => handeFilterAZ(e)} >
                <option value={"asc"}>Ascendente A-Z</option>
                <option value={'desc'}>Descendente Z-A</option>
            </select>

            <Paginado charactersPerPage={charactersPerPage} allPokemons={allPokemons.length} paginado={paginado} />
            
            {/* {
                allPokemons && allPokemons.map( ele =>{
                    return(
                        <Card key={ele.id} name={ele.name} id={ele.id} types={ele.types} img={ele.img} />
                    )
                })
            } */}
            <div className={styles.forma}>
                {

                    currentCharacters && currentCharacters.map( ele => {
                        return(
                            <Card name={ele.name} img={ele.img} id={ele.id} key={ele.id} types={ele.types}/>
                        )
                    } ) 
                }    
            </div>
        </div>
    )
}