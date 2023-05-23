const express = require('express');

const router = express.Router();
const Post = require('../models/Post')

//Routes 
router.get('', async (req,res) => {
    const locals = {
        title: "NodeJs Blog",
        description: "Simple Blog created with NodeJS Express & MongoDb."
    }

    try {
        const data = await Post.find();
        res.render('index', { locals, data });
    }catch(error) {
        console.log(error);
    }
    

    
})



module.exports = router;