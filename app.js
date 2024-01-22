const express = require('express');
const { url } = require('node:inspector');
const app = express();
const path = require('node:path');

// Routes
app.get('/', ( req, res ) =>{
    const pathHome = path.join(__dirname, 'views/home.html')
    res.sendFile(pathHome);
})

app.get('/contact', ( req, res ) =>{
    const pathContact = path.join(__dirname, 'views/contact.html')
    res.sendFile(pathContact);
});

app.post('/contact', ( req, res ) =>{

    console.log('Se cargo la info')

    res.redirect('/')

})

app.get('/register', ( req, res ) =>{
    const pathContact = path.join(__dirname, 'views/contact.html')
    res.sendFile(pathContact);
});

app.post('/register', ( req, res ) =>{
    console.log('Se cargo la info')

    res.redirect('/login')

})

app.get('/about-us', ( req, res ) =>{
    res.sendFile( path.join(__dirname, 'views/about.html') )
})

app.get('/flex', ( req, res ) =>{
    

    res.sendFile( path.join(__dirname, 'views/demo.html') )
})



// Public (static) Listen Server

app.use(express.static('public'))

const PORT  = process.env.PORT || 3000

app.listen( PORT, () => console.log(`Server up on PORT:  http://localhost:${PORT}`) )

