"use strict";

//Slide 40 la declaration des objets
const produit = {
    nom : "jean",
    prix : 5000,
    quantite : 5
}

const total = produit.prix * produit.quantite;

console.log("la valeur total du stock est : " + total);

// Slide 41: Tableau d'objets catalogue 
let catalogue = [
    {
        nom : "shirt",
        prix : 3000,
        quantite : 10
    },
    {
        nom : "veste",
        prix : 8000,
        quantite : 8
    },
    {
         nom : "T-shirt",
        prix : 2000,
        quantite : 15
    },
    {
        nom : "hoddie",
        prix : 4500,
        quantite : 5
    },
    {
        nom : "cap",
        prix : 1500,
        quantite : 20
    }
]


// slide 39 Methodes utiles pour les tableaux (reduce)
const moyenne = catalogue.reduce((some , p) => some + p.prix, 0) / catalogue.length;
console.log("le prix moyenne du catalogue est " + moyenne);

// slide 39 Methodes utiles pour les tableaux (filter)
const produitChers = catalogue.filter(p => p.prix > moyenne);
console.log("les produits qui sont plus chers que la moyenne sont : ");

// Slide 45: Boucle pour afficher les produit qui sont plus cher que la moyenne
for(let i=0; i < produitChers.length; i++){
    console.log(produitChers[i].nom);
}

// slide 39 Methodes utiles pour les tableaux (reduce)
const nombreTotalProduits = catalogue.reduce((some , p) => some +  p.quantite , 0);
console.log("le nombre total des produits dans le stock est : " + nombreTotalProduits);

// slide 39 Methodes utiles pour les tableaux (reduce)
const valeurGlobaleStock =  catalogue.reduce((some , p) => some + (p.prix * p.quantite) , 0);
console.log("la valeur globale du stock est : " + valeurGlobaleStock + "DA");


//Slide 46: Déclaration de fonction
function calculerValeurStock( produit){

    return produit.prix * produit.quantite;
}

console.log("valeur de stock de produit " + catalogue[0].nom + " est : " + calculerValeurStock(catalogue[0])+ "DA");
console.log("valeur de stock de produit " + catalogue[1].nom + " est : " + calculerValeurStock(catalogue[1])+"DA");
console.log("valeur de stock de produit " + catalogue[2].nom + " est : " + calculerValeurStock(catalogue[2])+ "DA");


// Fonction qui applique un traitement (callback) a chaque produit du catalogue
function appliquerTraitement(catalogue, callback) {
    for (let i = 0; i < catalogue.length; i++) {
        callback(catalogue[i]);
    }
}

// Callbacks
function afficherNom(produit) {
    console.log(produit.nom);
}

function afficherPrix(produit) {
    console.log(produit.prix + " DA");
}

console.log(" Noms des produits :");
appliquerTraitement(catalogue, afficherNom);

console.log("Prix des produits :");
appliquerTraitement(catalogue, afficherPrix);