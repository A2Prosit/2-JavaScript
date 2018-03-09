//Définition d’un objet
var obj = new Object();

//initialisation des attributs d’un tableau
obj["nom"] = "NOM1";
obj.prenom = "Prénom1";

//déclaration et initialisation d’un objet
var obj2 = {
    nom:"NOM2",
    prenom:"Prénom2"
};

//console.log(obj.nom);
//console.log(obj["prenom"]);
//console.log(obj2);

obj.age = 26;
//console.log(obj);
/*
function creerPersonne(prenom,nom){
    return{
        nom:nom,
        prenom:prenom,
        afficherPersonne: function (){
            return "Je suis "+nom+" "+prenom;
        },
    }
}*/

//david = creerPersonne("David","Trimoulet");
//console.log(david.afficherPersonne());

function Personne(prenom,nom){
    this.prenom = prenom;
    this.nom = nom;
}

Personne.prototype.afficherPersonne = function (){
    return "Je suis "+this.nom+" "+this.prenom;
}

Personne.prototype.afficherInversePersonne = function (){
    return "Je suis "+this.prenom+" "+this.nom;
}

//Instance
david = new Personne("David", "Trimoulet");

console.log(david.afficherPersonne());
console.log(david.afficherInversePersonne());
