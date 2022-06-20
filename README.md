Premier projet Angular, tuto suivi:
https://www.youtube.com/watch?v=DTIYVffhJuU&t=10882s
commencé le 20/06/2022

->fichier node_modules: contient toute les dépendance du projet donc Angular
->src: contient les sources du projet
->app: code source
->app-routing-module.ts: contient les routes
->assets: ici on peut mettre les images
->environnements: contient les environnements du projet

->browerslistrc: fichier de configuration pour paramétrer certains outils en fonction des navigateurs

->gitignore: fichier à ignorer si on utilise git

->angular.json: fichier important

->tsconfig.app.json et tsconfig.json: contient la configuration du compilateur typescript pour le projet

<<TIPS>>

-pour ne pas avoir à rajouter "undefined" pour le typage: aller dans le fichier tsconfig.json, rajouter la propriété ' "strictPropertyInitialization": false' dans l'objet "compilerOptions"
