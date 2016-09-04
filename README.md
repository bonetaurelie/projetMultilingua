# projetMultilingua

Multilingua, Projet 4 OpenClassrooms

Application mobile pour le projet 4 du parcours "Chef de projet multimédia" de OpenClassRooms.
Elle a pour but de créer une application mobile qui permet à l'utilisateur de se former aux langues étrangères sur smartphone en recevant chaque jour une leçon, des exercices et les corrigés.
Cette application mobile sera développée à l'aide du framework IONIC afin de la rendre hybride et donc compatible aussi bien avec IOS qu'Android.
Cependant à l'heure actuelle, cette application ayant été développé sur windows seul Android sera accessible.

Installation de l'application:
En ligne de commande (Attention faut avoir installé GIT) : dans le répertoire du projet, taper : git clone https://github.com/bonetaurelie/projetMultilingua.git

Utilisation de l'application:
- Sur le serveur:
En ligne de commande taper: ionic serve --lab mais dans ce cas certaines fonctionnalités ne seront pas disponibles.

- Sur l'emulateur Android:
Il est nécessaire d'avoir Android Studio d'installé et un device de déclaré dans AVD Manager.
En ligne de commande taper: ionic build android dans un premier temps puis ionic emulate android

- Sur un vrai téléphone Android:
En ligne de commande tape: ionic build android puis ionic run android -l -c -s

Dans tous les cas, si vous mettez ionic run android -l -c -s et que vous n'avez pas branché de téléphone à l'ordinateur, l'émulateur se lancera par défaut.
