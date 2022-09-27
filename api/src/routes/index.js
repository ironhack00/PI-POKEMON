const { Router } = require('express');
const { getAllInfo } = require('./controllers/getAllInfo');
const { getIdPokemon } = require('./controllers/getIdPokemon');
const { getType } = require('./controllers/getType');
const { postPokemon } = require('./controllers/postPokemon');
const { getNamePokemon } = require('./controllers/getNamePokemon')
const axios = require('axios');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', async(req, res)=> {

    const { name } = req.query;
    console.log(name)
 
    if(name === undefined){
        try{
            res.status(200).json(await getAllInfo());
        }catch{
            res.status(404).json(console.log('Disculpa, andamos con problemas tecnicos'));
        }
    }else{
        try{
            res.status(200).json(await getNamePokemon(name));
        }catch{
            res.status(404).json(console.log('Disculpa, andamos con problemas tecnicos'));
        }
    } 

})

router.get('/pokemons/:idPokemon', async(req, res)=> {

    const { idPokemon } = req.params;

    try{
          res.status(200).json(await getIdPokemon(idPokemon));
      }catch{
          res.status(404).json(console.log('Disculpa, andamos con problemas tecnicos'));
      } 
  
  })

router.get('/type', async(req, res)=> {

  try{
        res.status(200).json(await getType());
    }catch{
        res.status(404).json(console.log('Disculpa, andamos con problemas tecnicos'))
    } 

})

  router.post('/pokemons', async(req, res)=> {

    console.log(req.body)

    try{
        res.status(200).json(await postPokemon(req.body));
    }catch{
        res.status(404).json(console.log('estamos tendiendo problemas tecnicos, sepa disculpar'));
    }

})
module.exports = router;
