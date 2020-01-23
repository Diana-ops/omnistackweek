# Omni Stack Week 10 - First Day (13/01)

## What is app? 

<p align="justify">
This a app was developed in Omni Stack Week by Diego Fernandes (Rocketseat). The goal is develop a app that can find developers based in technologies they are using next to your localization. In desktop version, just is possible to register the users. In mobile version, have will a map with the developers found from your technologies. 
</p>

I got better the **frontend** part of application, let the desktop version more or less like that:

![layoutDesktop](https://user-images.githubusercontent.com/46378210/72940877-73564b00-3d4e-11ea-97cc-146c2e7dbd59.png)

## For run app

> It is necessary to have the files of directory **node_modules** (I don't put in here because are many files)

For run the backend of application: 
```
$ cd ../omnistack/baseApplication/backend/src/
$ yarn nodemon index.js
```
For run the frontend of application: 
```
$ cd ../omnistack/interfaceApplication/web/
$ yarn start
```
For run the mobile version of application: 
```
$ cd ../omnistack/mobileApplication/
$ yarn start
```

## Which languages/frameworks/features were used?
- Geolocalization API (for backend)

- Java Script (for backend/frontend)

- HTML, CSS (for frontend application)

- React (for frontend application)

- Node JS

- React Native (for application mobile)

- Expo (for application mobile)

## Which resources should be installed for develop this app? (for Windows)

- Install [Node.js 12.4.1 LTS](https://nodejs.org/en/) and after checking the instalation: 
```
$ node -v or npm -v
```
- Install [Chocolatelly](https://chocolatey.org/install) and after checking the instalation: 
```
$ choco -?
```
- Install [Yarn](https://yarnpkg.com/en/docs/install#windows-stable), you can do this with chocolatelly and check with:
```
$ yarn -v 
```
- Was used the [Visual Code](https://code.visualstudio.com/) for write the codes, by I used [Sublime](https://www.sublimetext.com/3) just 
for being lighter on my computer 

- Install [Insomnia](https://insomnia.rest/download/) for to do the requests (GET, POST, etc).

- The database will be create by [MongoDB](https://cloud.mongodb.com/).

- [MongoDBCompass](https://www.mongodb.com/download-center/compass) for to visualize the database of MongoDB
