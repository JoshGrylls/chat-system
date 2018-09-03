# ChatSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Run Server

Run `npm run build` to run the server

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Project

This Project is the deshboard of a role based chat system where users are able to chat in real time. Based on the users role (super admin, group admin, normal user) the user would have different system privileges.

There were many porblems encountered with this project the biggest being user authentication to determine which of the components to show and which to hide. I was not succesfully able to implement user authentication via api, although i was able to recieve json responses from a login form that verified the user from a json file. I was not able to create the admin user, group user and normal user roles but have set up thir corresponding menu components to be displayed when a user of that role logs in. A major factor to why this project is so poorly completed is the time spent on this project. To better follow due dates and phases etc, will allow for more time to research syntax and components that I did not understand. 

## Documentation
### Git
My git repository was split into phases where each commit included a working part of the system. eg. the login and account components working and added. You can find images and json files under '/src/assets', services under '/src/app/services', routes under '/src/app/routes' and all the components at '/src/app'. How git helped me: After the due date was extended, I reverted to a previous version of the project to take a step back and better tackle the project. (lol nice try) 

### REST API
There are login and register routes included in the system that were not implimented correctly. Due to a lack of time left to spend on this project, local storage was used in the meantime for testing the components.
Routes in this system can be found under '/src/app/routes'.

### Angular Architecture

This application runs on a single webpage, meaning the page does not reload, only updates when there is a change. The user is redirected to the login component automatically, the user can choose to log in or register etc. When doing this, the components are changed in the router-outlet. The next stage of the assignment was to add the user rights after the login authentication. Based on the user logged in, the system would check local storage and display the correct components based on the user rights. The server was initially created using node, where angular was then installed along with nodemon to create a constantly running build of the angular dist.

