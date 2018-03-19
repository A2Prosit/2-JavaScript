# Prosit 5.2 JavaScript

## Mots clés

*	Héritage: comme en java
*	Jquery: module js qui permet 
*	JavaScript: language qui permet d'animer du web
*	Caroussel: images qui défilent
*	ECMAScript: standart du js
*	Auto-completion: you know what it is
*	JSON: format d'encode de données
*	Prototype: concept JS ~copie d'objet avec des propriétées/fontions en +
*	PHP: langage de script serv
*	Programmation fonctionnel: prog qui prends et retourne des fonctions


## Contexte


Quoi ?

* Respecter els exigences du client (chargement dynamique, auto-complétion, carrousel)

Pourquoi ?

*	Satisfaire le client
*	Rendre le site dynamique

Comment ?

Utiliser JS , JQuery, JSON, ECMAScript


## Contraintes

Utiliser JS, JSON, JQuery, ECMAScript

## Problématique

Comment rendre un site dynamique ?

## Généralisation

Amélioration

## Hypothèses 

*	Le Javascript s’exécute côté client
*	PHP s’exécute côté serveur
*	PHP peut agir sur JS mais pas l’inverse
*	Les fichiers JSON stockent des données
*	Un carrousel = images qui tournent (s’échangent.. , pas tournent)
*	ECMAScript = ancêtre de JS
*	JS permet la permet la prog fonctionnelle
*	JS est orienté objet
*	Menu hamburger
*	JSON se rattache à JS 
*	JSON est un encodage pour transférer des données
*	On peut faire des formulaires avec PHP

## Plan d’action

Études :
### I.	JavaScript + héritage (histoire, definition,…)

JS est un langage de script léger, orienté objet, principalement connu comme LE language de script des pages web mais il est aussi utilisé en dehors du web commeNode.js, Apache CouchDB et Adobe Acrobat.LE code JS est interprété ou compilé à la volée (JIT).

Il utilise le concept de prototype (poo sans classes). Un prototype estun objet à partir duquel on peut créer d'autres objets. C'est un langages objet disposant de typage faible et dynamique qui permet de programmer suivant plusieurs paradigmes: fonctionnelle, impérative et orienté objet.


Objets standards : Array, Boolean, Date, Error, Function, JSON, Math, Number, Object, RegExp, String, Map, Set, WeakMap, WeakSet

Opérateurs: instanceof, typeof, new, this

instructions: do-while, for-in, for-of, try-catch, let, var, const, if-else, switch

Chaque fois qu'une page affiche des mises à jour de contenu en temps réel, des cartes interactives, des animations graphiques 2D / 3D ou un juke-box vidéo défilant, etc ont peut être quasi certain qu'il s'agit de JS

constructeur en JS : 

	function Monobjet(param1, param2, param3) {
		this.truc1 = param1;
		this.truc2 = param2;
		this.truc3 = param3;
	}


héritage :

	function Enfant(para1, param2, param3) {
		Parent.call(this, param1, param2);
		this.truc = param3;
	}

call appelle une fonction définie ailleur dans le contexte actuel

on peut aussi hériter d'un constructeur sans paramères:

	function Brick() {
	  this.width = 10;
	  this.height = 20;
	}

	function BlueGlassBrick() {
	  Brick.call(this);

	  this.opacity = 0.5;
	  this.color = 'blue';
	}

Moteur JS: interpréteur JS, il est généralement intégré au navigateur web.
Le premiermoteur JS SpiderMonkey à été créé en C pour Netscape Navigator.

Liste des moteurs JS:

* V8 de google
* JavaScriptCore d'Apple sur Safari
* SpiderMonkey le tout premier
* TraceMonkey, compilo  untégré à SpiderMonkey sur FireFox 3.5 et JägerMonkey sur le 4
* Charka sur IE

new features d'ECMA2017 :

* fonctions asynchrones
* mémoire partagée
* Object.values/Object.entries
* String padding
* Object.getOwnPropertyDescriptors
* Trailling commas dans les listes de paramètres de fonction 


### II.	JQuery

Bibliothèque JavaScript libre multiplateforme créée pour faciliter l'écriture de script côté client  dans le code HTML des pages web. Le première version date de 2006.

les fonctionnalitées sont entre autre:

* parcours et modif du DOM
* event
* effets visuels et animations
* manipulations du css
* Ajax
* plugin
* utilitaires ( version du navigateur)

utiliser jquery : 
	
pour l'intégrer à la page web
	
	<script src="/chemin/vers/jQuery.js"></script>
pour l'appeller: 

avec la fonction jQuery ou $, cette fonction est chaînable et retourne l'objet appellant

	$("div.test").

### III.	ECMAScript

Standard pour langage de scripting sur lequel Javascript est basé. 

ECMAScript est une standardisation de Javascript, Netscape à créé JS et l'à soumis à l'European Computer Manufacturer's Association (ECMA) pour standardisation et à cause de problèmes de copyright ils ont dû l'appeller ECMAScript

Il existe des différences entre ECMAScript et JS le fonctionnalitées principales de JS se basent sur le standard ECMAScript mais JS a des fonctionnalitées supplémentaires

D'autres langages que le JS utilisent le standart ECMAScript: ActonScript(d'Adobe Flash), Jscript( Microsoft), ils ont tous le même core et chacun ajoute leur style et des fonctionnalitées par dessus.

### IV.	JSON

JavaScript Object Notation: forma de données textuelle dérivé de la notation des objets du langage JS. Il permet de représenter de l'info structurée comme le permet XML

Un doc JSON ne comprends que 2 types d'éléments structurels :

* des ensembles de tuples/paires nom(clé)-valeur
* des listes ordonnées de valeurs

Ces éléments représentes trois types de données:

* des objets
* des tableaux
* des valeurs génériques de tableau, objet, booléen, nombre chaîne ou null

il existe 6 types de code en JSON :

* chaîne de caractères
* nombre : nb décimal signé qui peut contenir une part fractionnable ou élevée à une puissance, JSON n'admet pasles NaN et ne distingue pas entier et flottant
* booléen
* null
* Tableau
* Object

ex:

	{
	    "menu": {
	        "id": "file",
	        "value": "File",
	        "popup": {
	            "menuitem": [
	                { "value": "New", "onclick": "CreateNewDoc()" },
	                { "value": "Open", "onclick": "OpenDoc()" },
	                { "value": "Close", "onclick": "CloseDoc()" }
	            ]
	        }
	    }
	}

avantages: 

* Ces types de donnée sont suffisamment génériques et abstraits pour pouvoir être représentés dans n'importe quel langage et pouvoir représenter n'importe quelle donnée concrète
* Il est simple à mettre en oeuvre mais complet
* Il est peu verbeux et donc aussi facilement lisible par un humain que par une machine

inconvénients:

Le JSON ne peut représenter que les types généraux, et il n'est pas possible d'en ajouter d'autres. Pour les dates et couleurs il faut trouver des représentations en String alors qu'en XML les données sont typées et extensibles
Le typage faible affaiblit la sécurité  et fiabilité du langage, ex: pas de limite fixe pour les valeurs d'entiers ,dépends de l'interpréteur.

la fonction eval() permet d'évaluer du code JS représenté sous forme d'une chaîne de caractères

### V.	Programmation fonctionnelle

Paradigme de prog qui considère le calcul en tant qu'évaluation de fonctions mathématiques:

on n'utilise pas de machines à états pour décrire un programme mais un emboîtement de fonctions. Chaque fonction agit comme une boîte noire possédants plusieurs paramètres en entrée mais une seule sortie.

Ce paradigme facilite la création de tests unitaires 

### VI.	Éléments dynamiques d’un site web


### AJAX

Asychronous javascript + xml: 

Permet de réaliser des applis asychrones et recevoir les info sans affecter l'affichage. La plupart des implémentations modernes utilient JSON plutot qu'XML

Le terme ajax engloble plusieurs techno:

* html
* css
* dom
* js
* json ou xml
* xmlhttprequest


### DOM

Document object model : le DOM définit la structure d'une page et le moyen d'interagir avec elle. Il s'agit d'une interface de prog (API apllication programming interface)

Au début du web chaque navigateur avait son propre DOM incompatible avec les autres mais avec w3c tous les DOM utilisent le standard et sont compatibles.

Une page web peut être représentée sous forme d'arborescence, chaque entité est appellée un noeud, on les distinguent en deux types:

* ceux qui correspondent à es éléments html appellés noeuds enfants
* le contenu textuel

Réalisation :
### VII.	Corbeille
