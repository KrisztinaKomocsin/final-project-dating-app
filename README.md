# Purrfect-Match

## Deployed with Heroku

You can take a look at the deployed website here: [Purrfect Match](https://)

## Vision

My idea behind this project was creating a dating application for those people who love and have cats. My personal opinion about dating is it can be a trap and has a thousand option to fail. Finding the right partner is never easy, especially if the person has cat (or any other pets - but in my case I focus on cats).
Having a cat (or other pet) always require responsibility and commitment and when it comes to dating we want the person who admires this beautiful furry creatures like us. My dating application helps to these crazy cat lover people to connect to each other.

## Functionality

- User authentication: Registration + Login
- User authorization: Only the registered Users can match themselves to others, to see each other's profile and send email.

## Technologies

- React
- Next.js
- PostgreSQL
- Emotion
- Javascript + TypeScript

## Project Management

- Database Schema on DrawSQL: [View Schema](https://drawsql.app/krisztina-komocsin/diagrams/purrfect-match)
- Wireframing and Design: [View Figma](https://www.figma.com/file/XRZ33cuhLsBJK03swVjOV2/Purrfect-Match?node-id=0%3A1)
  My project at this moment is available in desktop mode but in the future I am going to make it fully responsive.
- Task management with Github and Fork.

## SetUp Instructions

To make use of this project, please follow these steps:

- Clone the repo to your local machine with `git clone <repo>`.
- Setup the database by downloading and installing PostgreSQL.
- Create a user and a database.
- Create a new file .env.
- Copy the environment variables from .env-example into .env.
- Replace the placeholders xxxxx with your username, password and name of database.
- Run `yarn install` in your command line.
- Run the migrations with `yarn migrate up`.
- Start the server by running `yarn dev`.

## Deploy to Heroku

A good way to deploy your Next.js app is to use Heroku.

- Sign up to Heroku: [Sign Up to Heroku](https://signup.heroku.com/)
- Create a new App
- Choose a name and select the "Europe" Region
- Click on the button in the middle called "Connect to GitHub"
- Search for your repository in the search box at the bottom of the page and click on the "Connect" button Click on the button for "Enable Automatic Deploys"
- Go back to the Overview tab and click on "Configure Add-On"
- Search for "Postgres" and select "Heroku Postgres" from the results
- Trigger a deploy by pushing your repo to GitHub

## Dependencies & Libraries

### General Setup

- Create next.js app
- ESLint

### Styling

- Emotion

### Database with Migrations

- dotenv-safe
- dotenv-cli
- postgres
- ley

### Cookies & Session-Tokens

- cookie
- csrf
- bcrypt

### Hosting & Deployment

- heroku-postbuild
![Landingpage](https://user-images.githubusercontent.com/77744187/180787520-8be75c50-c1dd-4e99-ae64-c60b15ac4f99.png)
