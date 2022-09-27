import React, {useEffect , useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getType, postPokemon } from '../../actions/actions';
import styles from './post.module.css';




export const PokemonPost = () => {

    function validateName(e){ 
        
            if(/^-?\d+$/.test(e.target.value)){
                setErrors('solo acepta letras la busqueda')
            }else{
                setErrors('')
            }    
    }

    function validateName(e){ 
        
        if(/^-?\d+$/.test(e.target.value)){
            setErrors('solo acepta letras la busqueda')
        }else{
            setErrors('')
        }    
}


    const dispatch = useDispatch();

    let listTypes = useSelector((state) => state.types );

    const [errors,setErrors]=useState('');

    const [input,setInput] = useState({
        name : "",
        life: "",
        attack: "",
        speed: "",
        hight: "",
        weight: "",
        defending:"",
        listType:[]
    });


    useEffect(() => {
        dispatch(getType())
    },[dispatch])

    function handleChange(e){
        if(e.target.name === 'name') validateName(e)
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    
    function handleSelect(e){
        setInput({
        ...input,
        listType:[...input.listType, e.target.value]
        })
    }

    function handleDelete(e){
        setInput({
            ...input,
            listType: input.listType.filter(poke => poke !== e )
        }) 
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postPokemon(input))
        alert('Congratulations you created a new recipe!')
        setInput({
            name : "",
            life: "",
            attack: "",
            speed: "",
            hight: "",
            weight: "",
            defending: "",
            listType:[]
        })
    }

    return(
        <div className={styles.form}>
            
            <Link to={'/Home'}>Home</Link>
            <h1 className={styles.h1}>Create your POKEMON</h1>

            <form onSubmit={(e) => {handleSubmit(e)}} >
                <div>
                    <label>name:</label>
                    <input
                    type='text'
                    name='name'
                    value={input.name}
                    onChange={(e) => {handleChange(e)}}/>
                </div>
                
                {!errors? null : <span>{errors}</span>}

                <div>
                    <label>life:</label>
                    <input
                    type='number'
                    name='life'
                    value={input.life}
                    onChange={(e) => {handleChange(e)}} 
                    />
                   
                </div>            

                <div>
                    <label>attack:</label>
                    <input
                    type='number'
                    name='attack'
                    value={input.attack}
                    onChange={(e) => {handleChange(e)}} 
                    />
                     
                </div>

                <div>
                    <label>speed:</label>
                    <input
                    type='number'
                    name='speed'
                    value={input.speed}
                    onChange={(e) => {handleChange(e)}} 
                    />
                     
                </div>

                <div>
                    <label>hight:</label>
                    <input
                    type='number'
                    name='hight'
                    value={input.hight}
                    onChange={(e) => {handleChange(e)}} 
                    />
                    
                </div>

                <div>
                    <label>weight:</label>
                    <input
                    type='number'
                    name='weight'
                    value={input.weight}
                    onChange={(e) => {handleChange(e)}} 
                    />
                    
                </div>

                <div>
                    <label>defending:</label>
                    <input
                    type='number'
                    name='defending'
                    value={input.defending}
                    onChange={(e) => {handleChange(e)}} 
                    />
                    
                </div>

                <select onChange={(e) => handleSelect(e)}>
                    {
                    listTypes && listTypes.map((t) => {
                    //const p = 1003987;
                    return (
                    <option value={t.name} key={t.id}> {t.name} </option>
                    )
                    })}
                </select >
                
                {
                    input.name.length && input.life.length && input.attack.length && input.speed.length && input.hight.length && input.weight.length && input.defending.length && input.listType.length && <button type='submit'> Create Pokemon</button>

                }
                    
            </form>

            {input.listType.map(e => {
               let i = 0;
               return(
               <div key={i+1}>
                    <h5>{e}</h5>
                    <button onClick={() => handleDelete(e)}>X</button>
                   
                </div>
            )})}

        </div>
    )
}
    
