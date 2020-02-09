The project is in Heroku (please give its dynos :dragon::dragon: a minute to wake up):
* Frontend is running here: [https://package-frontend.herokuapp.com/]
* Backend code is here: [https://github.com/sonkkeli/ubuntu-packages-viewer]
* Backend (rest api) is running here: [https://ubuntu-package-viewer.herokuapp.com/api/packages]

## Description
On a Debian and Ubuntu systems, there is a file called /var/lib/dpkg/status.real that holds information about software packages that the system knows about. I wrote a small program in Java to read and expose some key information about those packages with a React UI.

Currently on Heroku it shows the real packages of Heroku. If run locally on Ubuntu, it will read the real file on your Ubuntu system. If run locally on Windows, it uses fake file.

The index page lists installed packages alphabetically with package names as links. When following each link, one arrives at a piece of information about a single package. Including: name, description, dependencies and reverse dependencies. The dependencies and reverse dependencies are clickable and the user can navigate the package structure by clicking from package to package.

The idea was to create the app without external dependencies, so I didn't use Java Spring. On the frontend side I got a bit lazy and used React instead of Vanilla JS.

## Instructions to run the project locally
First you need to download and then build the backend code inside _/ubuntu-packages-viewer_ -directory with command:     
`mvn clean install package`

Then it creates you two jar-files inside _/ubuntu-packages-viewer/target_ -directory. You need to run the jar with dependencies with command :     
`java -jar ubuntu-package-viewer-1.0-SNAPSHOT-jar-with-dependencies.jar`

Now you can open your browser and go to __localhost:8081/api/packages__ or __localhost:8081/api/package/${packagename}__ to get the data.

Next you have to run the frontend code by first downloading it and then running the following commands inside _/package-viewer-frontend_ :      
`npm install` _to download and install the project dependencies_      
`npm start` _to run the project_      

This will open your browser with __localhost:3000__ where you can see the app running.