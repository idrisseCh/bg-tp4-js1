"use strict";


// Slide 41: Tableau d'objets Students 
const Students = [
    {
        id: 1000,
        nom: "JOHN",
        prenom: "DOE",
        note1: 14,  
        note2: 5    
    },
    {
        id: 2000, 
        nom: "BOB",
        prenom: "CARLTON",
        note1: 7,   
        note2: 1    
    },
    {
        id: 3000,
        nom: "RAVANE", 
        prenom: "SMITH",
        note1: 13,  
        note2: 3    
    }
];



/**
 * Fonction A Fonction  qui appelle B
 * Slide 46: Déclaration de fonction
 */
function A(){
   
     // Slide 45: Boucle for pour parcourir le tableau d'etudiants
    for(let i = 0; i < Students.length; i++){

        let student = Students[i];

        let moyenne = (student.note1 + student.note2)/2 + 5;

        // Slide 46: Appel de la fonction B avec la moyenne en parametres
        let estAdmis = B(moyenne);

        // Slide 43: Condition pour determiner le statut
        let statut;
        if (estAdmis) {
            statut = "ADMIS";
        } else {
            statut = "AJOURNE";
        }

        // Slide 34: Affichage du resultat avec console.log()
        console.log(student.id + ":" + statut);


    }


    /**
 * Fonction B 
 * Slide 46: Fonction avec paramètres et retour
 */
function B(moyenne) {
    
    // Slide 43: Condition admis si sa moyenne >= 10
    if (moyenne >= 10) {
        return true; // Slide 46: Retour d'un booleen
    } else {
        return false; // Slide 46: Retour d'un booleen
    }
}

}