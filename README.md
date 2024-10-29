# Justify API

Justify API is a Node.js application that provides endpoints for generating a token and justifying text. This README outlines how to use the API, including example requests.

## Table of Contents

- [Base URL](#base-url)
- [Endpoints](#endpoints)
  - [Generate Token](#generate-token)
  - [Justify Text](#justify-text)
- [Request Examples](#request-examples)
- [License](#license)

## Base URL

The base URL for the API is:


## Endpoints

### Generate Token

**POST** `https://justify-api.onrender.com/api/token`

This endpoint generates a token for the user.

#### Request Body

- **Content-Type**: `application/json`
- **Body** (raw JSON):
  ```json
  {
      "email": "mohamed.achi@esprit.tn"
  }

  Justify Text
POST /justify

This endpoint justifies the provided text using the generated token.

Authorization

Header:
Authorization: Bearer <token>
Request Body

Content-Type: text/plain
Body (raw text):
Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte, mes yeux se fermaient si vite que je n’avais pas le temps de me dire: «Je m’endors.» 
Et, une demi-heure après, la pensée qu’il était temps de chercher le sommeil m’éveillait; je voulais poser le volume que je croyais avoir dans les mains et souffler ma lumière; je n’avais pas cessé en dormant de faire des réflexions sur ce que je venais de lire, mais ces réflexions avaient pris un tour un peu particulier; il me semblait que j’étais moi-même ce dont parlait l’ouvrage: une église, un quatuor, la rivalité de François Ier et de Charles-Quint.
Example Request


POST https://justify-api.onrender.com/api/justify
Authorization: Bearer <token>
Content-Type: text/plain

Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte, mes yeux se fermaient si vite que je n’avais pas le temps de me dire: «Je m’endors.» 
Et, une demi-heure après, la pensée qu’il était temps de chercher le sommeil m’éveillait; je voulais poser le volume que je croyais avoir dans les mains et souffler ma lumière; je n’avais pas cessé en dormant de faire des réflexions sur ce que je venais de lire, mais ces réflexions avaient pris un tour un peu particulier; il me semblait que j’étais moi-même ce dont parlait l’ouvrage: une église, un quatuor, la rivalité de François Ier et de Charles-Quint.
