<p align="center">
    <img width="400" height="185" src="./src/assets/pics/mean.png">
</p>

# MEAN Simple Starter
This MEAN Starter kit is a template for Angular 5 MEAN projects.  MEAN is a full-stack development toolkit using the Javascript-based technologies MongoDB, Express, Angular, and Node.js.  It uses JavaScript for client-side and server-side web application development.

<p align="center">
    <img width="768" height="310" src="./src/assets/pics/mean_cycle.jpg">
</p>

## Versions
* MongoDB v3.6.0
* Express v4.16.2
* Angular v5.1.2
* Node.js v9.3.0

## Installation
1. Clone this repo: `git clone https://github.com/Stanza987/mean-simple-starter.git`
1. `cd` into the folder of the cloned repo
1. Run `yarn install` to install dependencies
1. Start your local MongoDB instance
1. Choose to run the development or production server
    * Development
        * Front End (Angular)
            * Run `ng serve`, and navigate to `http://localhost:4200/`. 
        * Back End (MongoDB, Express, Node.js)
            * Run `ng build --prod` to generate the `dist/` folder in your root directory.
            * Run `node server.js`, and navigate to `http://localhost:3000/`.
    * Production
        * Run `yarn start`. Navigate to `http://localhost:3000/`.

## Built-in scripts
* `yarn start`
    * Runs `ng build --prod` followed by `node server.js`

## Installed Packages
### Front-end
* Angular 5
* [Bulma CSS Framework](https://bulma.io/)
* [Font-Awesome 5](https://fontawesome.com/)

### Back-end
* Express
* Mongoose
* Body-Parser
* Cors

### Development
* Angular CLI v1.6.3
* Morgan Logging library
* Typescript
