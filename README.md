

# Prosit 5.2 JavaScript

## Mots clés

*	Héritage : Hériter de propriétés d'un ancêtre (objet)
*	Jquery : Bibliothèque basée sur le Javascript.
*	JavaScript : Langage informatique web, qui s'éxecute côté client, pour créer du dynamisme
*	Caroussel : Composant web qui défile les images.
*	ECMAScript : Norme basée sur le javascript.
*	Auto-completion : Complète automatiquement ce qu'on écrit.
*	JSON : Fichier d'encodage (comme le .xml) qui permet de transmettre 
*	Prototype : Exemplaire incomplet et non définit de ce que pourra être l'objet final
*	PHP : Hypertext Prepocessor
*	Programmation fonctionnel


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
### II.	JQuery
### III.	ECMAScript
### IV.	JSON
### V.	Programmation fonctionnelle
### VI.	Éléments dynamiques d’un site web

Réalisation :
### VII.	Corbeille


# 1 - JavaScripts & ECMAScripts


**Javascript** (JS) :
- Langage de script léger orienté objet
- Langage de script de page webs mais aussi dans Node.js, Apache Couche DB ou Adobre Acrobat. 
- Dynamiser des pages web.
- Langage interprété (par des navigateurs)
- Chaque navigateur possède un interpréteur Javascript différent : (IE : Chakra / Mozilla : SpiderMonkey / Mozilla Firefox : V8)
-  Script côté client
- Concept de protoype, faible typage dynamique (expliqué après)
- Programmation  fonctionnelle / impérative / orienté objet
- Son standard est ECMAScripts 
- La balise \<script> permet d'établir un dialogue entre le HTML et le Javascript
- On déclare  les fonctions dans le \<head> et on l'utilise dans le body.

**ECMA :** Javascript a envoyé sa version en 1996 à l'ECMA International (European Computer Manufacturers Association) pour que le langage soit standardisé, et que le langage puisse-être utilisé par d'autres personnes.
- Utilisé par d'autres langages comme ActionScript (Adobe Flash) ou JScript (Microsoft), chacun apportant une extension différente de cette base.
- Actuellement en ES6 (2015) 

**Particularité de JS** : 
Normalement, on retrouve deux types dans la programmation objet :
- class : définit un objet et toute ses propriétés.
- Instance : Représente une création d'un objet, par exemple, sur une classe Employee, on peut créer une instance "Victoria".

**MAIS** : JS ne fait pas la distinction entre les deux, c'est simplement un objet qui peut définir ses propres propriétés. Il utilise donc simplement des template pour obtenir un nouvel objet. N'importe quel objet peut devenir prototype pour un autre objet, permettant ainsi de partager ses propriétés.

/!\ Portée lexicale :
Une fonction dans une fonction ne sera disponible que dans la fonction {...}

# 2 - Programmation fonctionnelle

Le principe est de concevoir des programmes comme des fonctions mathématiques que l'on compose entre elles, à la différence des programmes impératifs organisés en instructions. Le but étant de minimiser l'écriture.

**Un langage fonctionnel** contient donc une syntaxe et des caractéristiques qui encouragent la programmation fonctionnelle.

Pour se faire :
- Fonction d'ordre supérieur (prennent une où plusieurs fonctions en entrée ou Chaque fonction retourne une autre fonction)
- Utiliser des maps avec des fonctions (ex : const map1 = array1.map(x => x * 2);)
- Utiliser un Array.filter (const result = words.filter(word => word.length > 6);)
- Utiliser un Array.reduce(const reducer = (accumulator, currentValue) => accumulator + currentValue;)
{...}

# 3 - JQuery

JQuery est une librérie très riche de Javascript pour facilité l'écriture de scripts côté client : (2016)
- Parcours et modification du DOM
- Evenements
- Effets visuels et animations
- Manipulations de CSS (Comme JQuery UI qui comprends de nombreux thèmes)
- Ajax (un autre langage)
- Plugins
- Utilitaires

**NB :** Jquery peut-être complété par underscore.js, c'est une librairie Javascript qui fournit plus de 100 fonctions communes aux tâches d'un programme.

# 4 - Le JSON 

Le JSON (JavaScript Object Notation) est un format de données textuelles assez léger. Il permet de représenter de l'information structurée (comme le XML). Il est aisément analysable ou générable par des machines.

Un document JSON représente de l'information accompagnée d'étiquettes qui permettent de les interpréter.
Il ne comprends que deux types d'élements structurels :
- Nom / Valeur : Un couple 
- Liste ordonnées de valeurs 
Ces mêmes élements représentent trois types de données :
- Objets
- Tableaux
- Valeurs génériques : Boolean / Nombre / Chaine / Null {...}

Pour vérifier / cast les types, on peut utiliser la méthode eval() (Javascript), à préférer plutôt que JSON.parse.


# 5 - Ajax

Asynchronous JavaScript and XML permet de construire des applications Web et des sites web dynamiques interactifs sur un poste client, en utilisant les technologies du navigateur.

Il combine JavaScript, CSS, JSON, XML, DOM, et XMLHttpRequest pour améliorer les applications internet..
- DOM + Javascript : Modifier l'information présentée dans le navigateur en respectant sa structure
- XMLHttpRequest : Dialogue asynchrone avec le serveur Web
- XML : Structure les informations transmises entre serveur Web et navigateur (format JSON)

#### **Comment marche AJAX :**
Un programme écrit en JavaScript incorporé dans une page web est exécuté par le navigatuer, celui-ci envoie en arrière-plan les demandes au serveur Web, puis modifie le contenue de la page affiché par le navigateur en fonction du résultat reçu (**évitant donc l'affichage d'une nouvelle page complète**)
 
 Les demandes sont effectués de manière  **asynchrone**, càd que le web continue d'exécuter le JavaScript alors que la demande est partie, et n'attends pas la réponse du serveur Web pour poursuivre ses manipulations.

On peut utiliser Ajax de différentes manières :
-  Il existe une API sous JQuery
- On peut utiliser XMLHttpRequest

**Principe de XMLHttpRequest :**
- **Préparation et envoi de la requête**
	- On instancie : ``
var xhr = new XMLHttpRequest();
``
	- On déclare notre action et sur qui on veut la faire (+ envoi si Get) : (encore sert à éviter caractères interdits)
	 ``
var value1 = encodeURIComponent(value1),
    value2 = encodeURIComponent(value2);
xhr.open('GET', 'http://mon_site_web.com/ajax.php?param1=' + value1 + '&param2=' + value2);
``
	- On envoie si l'action est un POST : ``
xhr.send('param1=' + value1 + '&param2=' + value2);
``
- **Réception des données**: 
C'est une fonction, "readystatechange" qui va se déclancher sur les évènements suivants : 
//Image ici

xhr.addEventListener('readystatechange', function() { // On gère ici une requête asynchrone

    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) { // Si le fichier est chargé sans erreur

        document.getElementById('fileContent').innerHTML = '<span>' + xhr.responseText + '</span>'; // On l'affiche !

    } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status != 200) { // En cas d'erreur !
    
        alert('Une erreur est survenue !\n\nCode :' + xhr.status + '\nTexte : ' + xhr.statusText);

    }

});


# 6 - Systèmes web dynamique :

**Carousel** : 
![](http://zidimperio.com/wp-content/uploads/carousel-web-design-21-best-carousel-design-images-on-pinterest-carousels-website.jpg)

  ==> Carousel.js : http://getbootstrap.com/javascript/#carousel
==> Carousel JQuery : http://plugins.jquery.com/tag/carousel/

**Autocomplete.js** : http://autocompletejs.com/


# 7 - Pour aller plus loin :
promise.js => lire un fichier et le parser en JSON, faire des traitement de manières aynchrone.

Async Function => Définie une fonction asynchrone (le retourne en objet)

documents.querySelector : Retourne le premier élement dans le document correspondant.

documents.querySelectorAll : Renvoie la liste des éléments dans le document, dans une collection de noeuds (NodeLIst)

**VanillaJS** : Gros troll d'internet -> http://vanilla-js.com/




 
