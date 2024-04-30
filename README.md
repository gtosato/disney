# Disney+ Clone

This application mocks the functionality and appearance of the Disney+ website. It is fully responsive, working on all media screen sizes. This project is strictly for educational purposes only.

<br />

<div style='text-align: center;'>
  <img src='./demo480p.gif' alt='demo' />
</div>

<br />
Live deployment: 
<br />
https://wonderful-jalebi-0240e4.netlify.app/

## Requirements / Purpose

It is built using the following technologies:

-    Next.js
-    Tailwind.css
-    Microsoft Azure function deployment
-    OpenAI for movie recommendations based on user search criteria
-    TMDB (The Movie Database) website API to retrieve data
-    Zod validation

This project was built to develop a better understanding of utilising Microsoft Azure hosted functions to integrate AI functionality into an application. It uses Next.js to simplify routing and uses server side components to cache previous search results.

## Build Steps

```bash
$ npm install
```

## Running the app

You will need to acquire an API key from the TMDB website. You can read how to do this here:

https://developer.themoviedb.org/reference/intro/getting-started

Once provided, you will need to add your API key for the TMDB API.

In your root folder, create the following file

-    .env.local

Add the following line to the above file

-    TMDB_API_KEY={API_KEY}

For security reasons, please ensure the .env.local file is added to your .gitignore file.

Once your TMDB API key has been added to your project, you can run your project.

```bash
# development
$ npm run dev
```

## Design Goals

-    To develop an application with similar look and feel of existing site.
-    Movie Carousel component is designed for re-use across mulitple pages, taking in a parameter of isVertical to determine how it should be displayed.

## Known issues

-    Styling not yet complete for Light Mode. For best presentation, view site in Dark Mode.

## Future Goals

-    Adding custom user experience through authentication to allow user to select favourites, add movie ratings, etc.

## Road Blocks

-    Received 500 Internal Server error when requesting from OpenAI. Relatively easy fix as OpenAI credit balance needed to be topped up.

-    Issues with deployment as Typescript generated errors since internal Azure project was referencing specific libraries. In tsconfig.json, added an exclude to the function folder to resolve issue.
