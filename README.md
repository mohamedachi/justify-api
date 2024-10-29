# Justify API

Justify API est une application Node.js qui fournit des points de terminaison pour générer un token et justifier du texte. Ce README explique comment utiliser l'API, y compris des exemples de requêtes.

## Table des Matières

- [URL de base](#url-de-base)
- [Points de terminaison](#points-de-terminaison)
  - [Générer un token](#générer-un-token)
  - [Justifier le texte](#justifier-le-texte)
- [Exemples de requêtes](#exemples-de-requêtes)
- [Licence](#licence)
- [Lien Postman](#lien-postman)
- [Exécution en local](#exécution-en-local)

## URL de base

L'URL de base pour l'API est :
https://justify-api.onrender.com/api

## Points de terminaison

### Générer un token

**POST** `/token`

Ce point de terminaison génère un token pour l'utilisateur.

#### Corps de la requête

- **Content-Type**: `application/json`
- **Corps** (JSON raw) :
  ```json
  {
      "email": "vousremail@ici.com"
  }
Exemple de requête

POST https://justify-api.onrender.com/api/token

Content-Type: application/json
Corps (JSON raw) :
  ```json
{
    "email": "mohamed.achi@esprit.tn"
}
Justifier le texte
POST /justify

Ce point de terminaison justifie le texte pour l'utilisateur.

Corps de la requête

Content-Type: application/json
Corps (texte brut) :

Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte, mes yeux se fermaient si vite que je n’avais pas le temps de me dire: «Je m’endors.» 
Et, une demi-heure après, la pensée qu’il était temps de chercher le sommeil m’éveillait; je voulais poser le volume que je croyais avoir dans les mains et souffler ma lumière; je n’avais pas cessé en dormant de faire des réflexions sur ce que je venais de lire, mais ces réflexions avaient pris un tour un peu particulier; il me semblait que j’étais moi-même ce dont parlait l’ouvrage: une église, un quatuor, la rivalité de François Ier et de Charles-Quint.
Exemple de requête

POST https://justify-api.onrender.com/api/justify

Content-Type: application/json
Corps (raw text ) :
Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte, mes yeux se fermaient si vite que je n’avais pas le temps de me dire: «Je m’endors.» 
Et, une demi-heure après, la pensée qu’il était temps de chercher le sommeil m’éveillait; je voulais poser le volume que je croyais avoir dans les mains et souffler ma lumière; je n’avais pas cessé en dormant de faire des réflexions sur ce que je venais de lire, mais ces réflexions avaient pris un tour un peu particulier; il me semblait que j’étais moi-même ce dont parlait l’ouvrage: une église, un quatuor, la rivalité de François Ier et de Charles-Quint.


#### Lien postman
https://www.postman.com/spaceflight-astronomer-78659289/justify-api-mohamed-achi/collection/6te0icp/test?action=share&creator=39360549

Pour tester le projet :

Ouvrez le lien pour accéder à mon espace de travail.
Créez un fork pour tester le lien dans votre propre espace de travail. Ne vous inquiétez pas, vous n’aurez qu’à cliquer sur « Envoyer », tous les tests sont prêts.
Exécution en local

Installer : npm install
Construire : npm run build
Exécuter : npm start
