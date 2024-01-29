var url = require('url');
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == ('/accueil.html')) {
        res.write("<!DOCTYPE html><html><body><h1> Bienvenu sur l'accueil </h1></body></html>");
        console.log("Vous êtes à l'accueil");
    }
    if (req.url == ('/logo.html')) {
        res.write('<!DOCTYPE html><html><body><p><img src="https://www.cidj.com/sites/default/files/styles/full_offre/public/2021-10/Epitech-Technology-logo.gif?itok=1zuGzxJz" /></p></body></html>');
        console.log('Vous êtes au logo');
    }
    if (req.url == ('/profile.html')) {
        console.log('Vous êtes sur votre profile');
    }
    res.end();
}).listen(3001);
console.log('serveur créer');
