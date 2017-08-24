## Step 1
Créer et configurer le serveur express
- `express`
- logger: `morgan`
- `view engine`: `pug`
- `views` pour le chemin vers le dossier des vues
- chemin vers le dossier des fichiers statiques (`public`)

## Step 2
Installer Mongoose
- `mongoose`
- connecter le serveur à la database

## Step 3
Créer le modèle `Learner`
- dans le fichier `learners.js` qui se situera dans le dossier `models` contenant tous les modèles
- créer le schéma et exporter le modèle

## Step 4
Créer les routes
1. `GET /learners` qui rend la vue `learners/list`
  - créer la vue -> fichier `list.pug` dans `views/learners/`
  - récupérer la liste des apprenants depuis la database et l'injecter dans la vue
  - update la vue pour afficher le nom et le prénom de chaque apprenant de la liste
  
2. `POST /learner/:id` qui envoie un learner dans la db
  - créer un formulaire pour ajouter un learner
  - sauvegarder le learner dans la db
  - rediriger vers la liste des apprenants

3. UPDATE

4. DELETE
