
# Prosit 5.2 JavaScript

## Mots clés

*	Héritage
*	Jquery
*	JavaScript
*	Caroussel
*	ECMAScript
*	Auto-completion
*	JSON
*	Prototype
*	PHP
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

Le JSON (JavaScript Object Notation) est un format de données textuelles. Il permet de représenter de l'information structurée (comme le XML).
Un document JSON représente de l'information accompagnée d'étiquettes qui permettent de les interpréter.
Il ne comprends que deux types d'élements structurels :
- Nom / Valeur
- Liste ordonnées de valeurs
Ces mêmes élements représentent trois types de données :
- Objets
- Tableaux
- Valeurs génériques : Boolean / Nombre / Chaine / Null {...}

Pour vérifier / cast les types, on peut utiliser la méthode eval() (Javascript), à préférer plutôt que JSON.parse.


