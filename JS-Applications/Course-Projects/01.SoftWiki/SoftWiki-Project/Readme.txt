HOSTING LOCALLY THE PROJECT
    1) npm init --yes  -  Initializing the project with package.json
    2) npm install --save-dev lite-server  -  (better server than default one - without index.html).  "--save-dev" - will be used only for development
    3) setting the start with lite-server in package.json: 
    "scripts": {
        "start": "lite-server",
    },
    4) The server can be started with npm start (lite-server automatically host the project by using index.html)


INSTALLING LIT-HTML
    1) npm install --save lit-html
    2) install lit-html extension for better view of the templates 