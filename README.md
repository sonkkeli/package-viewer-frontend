The project is in Heroku (please give it a minute to wake up):
* Frontend is running here: [https://package-frontend.herokuapp.com/]
* Backend code is here: [https://github.com/sonkkeli/ubuntu-packages-viewer]
* Backend (rest api) is running here: [https://ubuntu-package-viewer.herokuapp.com/api/packages]

## Instructions
On a Debian and Ubuntu systems, there is a file called /var/lib/dpkg/status that holds information about software packages that the system knows about. Write a small program in a programming language of your choice that exposes some key information about packages in the file via an HTML interface.

* The index page lists installed packages alphabetically with package names as links.
* When following each link, you arrive at a piece of information about a single package. The following information should be included:
    * Name
    * Description
    * The names of the packages the current package depends on (skip version numbers)
    * Reverse dependencies, i.e. the names of the packages that depend on the current package
    * The dependencies and reverse dependencies should be clickable and the user can navigate the package structure by clicking from package to package.