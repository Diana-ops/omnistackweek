## What is app? 

<p align="justify"> 
  A website for to register blood donors. The informations about name, email and  blood type was inputs in form was stored in database (backend) and send for interface again (frontend).
</p>

## For run app

Clone this project:

```
git clone "https://github.com/Diana-ops/rocketseatProjects/edit/master/maratonaDev3"
```

> It is necessary to have the files of directory **node_modules** (I don't put in here because are many files) :grimacing:

You can to have this dependencies creating a new project with React:

```
$ npm install express
```

So, move **node_modules** to "maratonaDev3/" directory

With the dependencies create, just run application with:

```
$ npm start
```
Is possible to see the response of local request acessing http://localhost:3000/

## Which languages/resources were used?

- HTML: structure of frontend
- CSS: style of frontend:
- JavaScript: animations and data flow about name and blood types 
- [postgreSQL](https://www.postgresql.org/download/): for create a database 
- [NodeJS](https://nodejs.org/en/): for develop a environment to work with JS server

## Which resources should be installed for develop this app?

For create a project to run backend and frontend, execute: 
```
$ npm npm init -y ou yarn init -y
```
Greate, a file caled [package.json](https://github.com/Diana-ops/rocketseatProjects/blob/master/maratonaDev3/package.json) will be create.

For to work with server manager, execute: 
```
$ npm install express
```
Greate, a folter called node_mdules and a file [package-lock.json](https://github.com/Diana-ops/rocketseatProjects/blob/master/maratonaDev3/package-lock.json) will be create.

For observing the alterations while do you develop without to exit and enter the server, create:
```
$ npm install nodemon 
```

For create tampletes, execute:
```
$ npm install nunjucks
```

Before install the postgreSQL, for to conect the database with nodejs, execute:
```
$ npm install pg
```
<hr>

If you can and wanted give me some **feedback** about my project or README.md, send me a **Pull Requests** or **Issues**. Advices are many welcome and constructive for me :smile:

Give me a **Star** if this project help or inspired you somehow :star:
