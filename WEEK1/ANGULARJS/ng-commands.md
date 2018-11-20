npm commands:
1.npm install (in package directory, no arguments):
   Install the dependencies in the local node_modules folder.
   In global mode (ie, with -g or --global appended to the command), 
  it installs the current package context (ie, the current working directory) as a global package.
2.Install package globally. Global packages are usually for executable commands.
  $ npm install <package name> -g
3.Install package globally. Global packages are usually for executable commands.
   $ cd /path/to/the/project
   $ npm install <package name>
4.Uninstall global package.
   $ npm uninstall <package name> -g
5.Uninstall local package.
    $ cd /path/to/the/project
    $ npm uninstall <package name>
6.Search package.
   $ npm search <package name>
7.List global packages.
   $ npm ls -g
8.List global packages detail.
   $ npm ls -gl
9.List local packages.
   $ cd /path/to/the/project
   $ npm ls
10.List local packages detail.
   $ cd /path/to/the/project
   $ npm ls -l
11.Update global packages.
     $ npm update -g
12.Update local packages.
    $ cd /path/to/the/project
    $ npm update
13.npm config:
     Changing the Location of Global Packages
     $ npm config list
14.Installing a Specific Version of a Package:
     We can install the Underscore package in the version we want. We do that by using the @ sign to append a version number.
     $ npm install underscore@1.8.2
15.Managing the Cache
     When npm installs a package it keeps a copy, so the next time you want to install that package,
    it doesn’t need to hit the network. The copies are cached in the .npm directory in your home path.
    $ ls ~/.npm
    $ npm cache clean
16. To know the version of current npm:
    npm -v   
17.Initialize a npm package:
    When we create a new module, you want to describe your package with the package.json file.
    npm init
18.$ npm publish:
   If everything is fine with our module, then it will be published in the repository and will be accessible to install using NPM like any other Node.js module.
19.npm help
   Generic help for npm. We can use this command when we require help.  
   npm -h
20.npm-start
    Start a package
    npm start [-- <args>]
   This runs an arbitrary command specified in the package’s "start" property of its "scripts" object. 
   If no "start" property is specified on the "scripts" object, it will run node server.js.
21.npm-test
  Test a package
  npm test [-- <args>]
  This runs a package’s “test” script, if one was provided.
22.npm-stop
    Stop a package
    npm stop [-- <args>]
    This runs a package’s “stop” script, if one was provided.


