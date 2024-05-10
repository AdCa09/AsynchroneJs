# Exercices Asynchrones en JavaScript 🚀

Ce dépôt contient deux exercices pratiques pour explorer et mettre en pratique les concepts de programmation asynchrone en JavaScript.

## Contenu du Dépôt 📁

Le dépôt est structuré comme suit :

- `index.html` : Fichier HTML servant de point d'entrée pour l'exercice 1.
- `script.js` : Fichier JavaScript contenant le code pour les deux exercices.
- `data.json` : Fichier JSON contenant des données utilisées dans l'exercice 1.
- `exercise1.html` : Fichier HTML pour l'exercice 1.
- `exercise2.html` : Fichier HTML pour l'exercice 2.

## Fonctionnalités et Instructions 📝

### Exercice 1 💻

L'exercice 1 vise à comprendre le fonctionnement de la récupération de données asynchrones et leur manipulation dynamique dans une page web.

1. **Chargement de Données JSON** : Lorsque vous cliquez sur le bouton sur la page `exercise1.html`, le contenu du fichier JSON est chargé à l'aide de la fonction `fetch()` depuis `data.json`.
2. **Génération Dynamique** : Les données récupérées sont ensuite utilisées pour générer dynamiquement une liste `<ul>` sur la page, avec chaque élément du tableau présenté dans un `<li>`.

### Exercice 2 🌍

L'exercice 2 explore l'interaction avec une API externe pour obtenir des données en fonction des entrées de l'utilisateur.

1. **Requête à l'API Agify** : Lorsque vous saisissez un nom dans la zone de texte sur la page `exercise2.html` et cliquez sur le bouton, une requête est envoyée à l'API Agify pour prédire l'âge probable de la personne portant ce nom.
2. **Affichage des Résultats** : Une fois la requête terminée, le résultat est affiché dans un nouveau `<div>` sur la page, avec un nouveau `<div>` créé pour chaque requête effectuée.
3. **Sélection du Pays** : Vous pouvez également affiner la recherche en sélectionnant un pays spécifique dans le champ `<select>` disponible sur la page.


