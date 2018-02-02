# MEAN CRUD Example
### Last Update: 2/1/2018
This program is an example of a CRUD application using the MEAN stack.  This project was modified from the original code provided in this article: [MEAN Stack (Angular 5) CRUD Web Application Example](https://www.djamware.com/post/5a0673c880aca7739224ee21/mean-stack-angular-5-crud-web-application-example) by *Didin J.*  The GitHub repo for his project can be found [here](https://github.com/didinj/mean-stack-angular5-crud).

<p align="center">
    <img width="500" height="308" src="./src/assets/pics/homepage.png"><br>
    <a href="https://meancrudexample.herokuapp.com/" target="_blank">MEAN Stack CRUD Example</a>
</p>

## Versions
* MongoDB v3.6.2 (Mongoose v5.0.3)
* Express v4.16.2
* Angular v5.2.3
* Node.js v9.5.0

## Cloning the Project for Personal Use
### Installation
1. Clone this repo `git clone https://github.com/stanleyeosakul/mean-crud-example.git`
1. `cd` into the folder of the cloned repo
1. Run `yarn install` to install dependencies
1. Configure your keys file `config/keys.js`
    * From the root directory, create the keys file `touch config/keys.js`
    * Enter your mongoURI for `MongoDB` into `keys.js`

        ```typescript
        module.exports = {
        mongoURI: '<your-mongodb-url-goes-here>',
        };
        ```
1. Start your local MongoDB instance
1. Choose to run the development or production server
    * Development
        * Front End (Angular)
            * Run `ng serve`, and navigate to `http://localhost:4200/`. 
        * Back End (MongoDB, Express, Node.js)
            * Run `yarn run dev`, and navigate to `http://localhost:3000/`.
    * Production
        * Run `yarn run build`, and navigate to `http://localhost:3000/`.

## Built-in scripts
* `yarn run dev`
    * Builds the Angular project without build optimization into the `dist/` folder
    * Runs the `server.js` node app
* `yarn run build`
    * Builds the Angular project into the `dist/` folder
    * Runs the `server.js` node app

## Installed Packages
### Front-end
* [Angular v5.2.3](https://angular.io/)
* [Bulma CSS Framework v0.62](https://bulma.io/)
* [Font-Awesome v5.0.6](https://fontawesome.com/)

### Back-end
* Express
* Mongoose
* Body-Parser

### Development
* [Angular CLI v1.6.7](https://github.com/angular/angular-cli)
* Morgan Logging library
* Typescript
