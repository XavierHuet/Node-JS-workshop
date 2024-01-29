const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
})
app.get('/accueil', (req, res) => {
    res.send("<!DOCTYPE html><html><body><h1> Bienvenu sur l'accueil </h1></body></html>");
    console.log("Vous êtes à l'accueil");
})
app.get('/logo', (req, res) => {
        res.send('<!DOCTYPE html><html><body><p><img src="https://www.cidj.com/sites/default/files/styles/full_offre/public/2021-10/Epitech-Technology-logo.gif?itok=1zuGzxJz" /></p></body></html>');
        console.log('Vous êtes au logo');
})
app.get('/profile', (req, res) => {
    res.send("<!DOCTYPE html><html><body><h1> Bienvenu sur votre profile </h1></body></html>");
    console.log('Vous êtes sur votre profile');
})

app.listen(port, () => {
  console.log(`Serveur créer`)
})