import React from "react";
import { Link } from 'react-router-dom';
import styles from "../Card/card.module.css"

export const Card = ({ name, types, id, img })=>{
    console.log(styles)
    
    return(
        <div className={styles.card}>
            <Link to={`/pokemons/${id}`} className={styles.lin}>
                <h2 className={styles.link}>{name}</h2>
                </Link>
            <Link to={`/pokemons/${id}`}>
            <div class={styles.images_box}>
                <img src={img} className={styles.img}></img>
            </div>
            </Link>
            <p className={styles.type}>{types}</p>
        </div>
    )
}