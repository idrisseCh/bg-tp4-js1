"use strict"; 

//Slide 37 utilisation des commentaires

//Slide 39 la declaration des Tableaux
let tableauEtudiants = new Array("Etudiant1", "Etudiant2", "Etudiant3");

//Slide 40 la declaration des objets
const ObjetEtudiant = {
    nom : "John",
    prenom : "Doe",
    age : "30"
}

//Slide 41 Tableau d'objets

const Etudiants = [

    {
        nom : "cheriet",
        prenom : "idris",
        age : "22"
    },
    {
        nom : "okbi",
        prenom : "moncef",
        age : "21"
    },
    {
        nom : "ouali",
        prenom : "soheib",
        age : "22"
    }
];




//Slide 45 la declaration des fonctions
//Function 1 afichage du nom
function F1(){

     //Slide 38 l'affichage dans le console
     // Slide 39: Acces aux elements du tableau
    console.log(tableauEtudiants[0]); // Affiche "etudiant1"
    console.log(tableauEtudiants[1]); // Affiche "etudiant2" 
    console.log(tableauEtudiants[2]); // Affiche "etudiant3"

}

//function 2 affichage du prenom
function F2(){

    console.log(ObjetEtudiant);

}

//Function 3 affichage du nom et prenom 
function F3(){

    //Slide 38 concstenation des chaines
    // Slide 45: Boucle pour parcourir le tableau d'objets
    for (let i = 0; i < Etudiants.length; i++) {
        const etudiant = Etudiants[i];
        // Slide 40: Accès a chaque objet
        console.log(etudiant.nom + "-" + etudiant.prenom + "-" + etudiant.age);
    }
}




