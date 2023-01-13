// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

let myObject = {
    nom: 'nicolas',
    age: 18,
}

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. En passant par la div dont l'id est object, récupère le h1 et le h2 dans un tableau du nom de myElements
let div = document.querySelector('#object');
let myElements = [div.firstElementChild, div.lastElementChild];

// ### 2. Trouve une méthode pour créer un tableau des propriétés de ton objet
let tableau = Object.keys(myObject).map(function(cle){
    return [cle, myObject[cle]];
});
console.log(tableau);

// ### 3. Créer une boucle qui va parcourir toutes les propriétés contenu dans ton object et qui pour chacune d'elle fait un console.log de la propriété
// ### 4. Efface ton console.log, trouve un moyen d'aller dans ton objet récupéré la valeur de chaque propriétés et fait un console log de ce que cela retourne
// ### 5. Rajoute un count(compteur ou index comme tu l'entends) dans ta boucle
let count = 0;
for(let i = 0; i < tableau.length; i++){
    console.log(tableau[i][0]);
    console.log(tableau[i][1]);
    count++;
}
// ### 6. Sert toi de ce count/index pour parcourir ton tableau myElement dans ta boucle et d'y insirer ce qu'on te retourne a l'énoncé 4
for(let i = 0; i < count; i++){
    myElements[i].innerText = tableau[i];
}
