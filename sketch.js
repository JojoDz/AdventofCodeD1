//variable "fs" et "content" pour System File de Node.js
var fs = require('fs');
var content;
//variable pour la 2e boucle
let n1;
let n2;

//lire le contenu du fichier avec System File de Node.js
fs.readFile('input.txt', 'utf8', function(err, data) {
    content = data;
    //console.log(content); : pour voir les données dedans
    var tableau = content.split("\r\n");
    //split() : diviser une chaîne de caractères à partir d'un séparateur pour fournir un tableau de sous-chaînes. \r\n : new line
    
    //1ère boucle pour parcourir le tableau
    for (let i = 0; i < tableau.length; i++) {
        
        //au parcours de tous les éléments du tableau 
        //convertir les données du tableau (string) en integer @ parseInt()
        for (let j = 0; j < tableau.length; j++) {
            n1 = parseInt(tableau[i]);
            n2 = parseInt(tableau[j]);
            //si n1 + n2 additionnés valent 2020
            if (n1 + n2 === 2020) {
                //les multiplier entre eux
                console.log(n1 * n2);
            }
        }
    }
});


