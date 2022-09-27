import React from "react";
import styles from './paginado.module.css'


export const Paginado = ( {charactersPerPage, allPokemons, paginado} ) =>{

    const pageNumbers = [];
    
    for( let i=1; i <= Math.ceil(allPokemons/charactersPerPage); i++){
        //console.log(Math.ceil(allPokemons/charactersPerPage))
        pageNumbers.push(i)
    }
   
    return(
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                {
                    pageNumbers && pageNumbers.map(number =>{return(
                       <li key={number} className={styles.li}>
                            <a onClick={()=>paginado(number)}>{number}</a>
                       </li> 
                    )})
                }
            </ul>
        </nav>
    )

};