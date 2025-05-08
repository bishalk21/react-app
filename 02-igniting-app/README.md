- npm,

**how we can ignite our app and make app scalable and production ready, and what actually inside `npx-create-react-app`**

- what makes your react app faster?
- what makes your react app performance?
- what makes your developer performance better?
  – can i have multiple root.render() in app?
  – can i have multiple reactDOM.createRoot() in app?
  – can i have multiple id root in app?

- pushing the code into remote repo
  - whatever can be regenerated, don't push into git
- scaling and optimizing app before production ready

  - can react itself build fast production ready app?: no
  - is react making the app faster?: no, there are a lot of other packages, libraries, code to make production ready

  - npm

    - everything, but not a node package manager, which manages packages
    - standard repository for all the packages
    - configuration of npm in project: npm init in terminal

  - package.json:

    - configuration for our npm, json structured file
    - keeps track of approx. or what version of packages are installed into project
    - dependencies
      - are managed by npm inside package.json
      - are required during both development and production mode
    - should i put package.json inside git
      - yes, maintains the list of what all dependencies are needed or installed for the project

  - package-lock.json

    - keeps track of exact version installed into project, while package.json can have caret or tilde update
    - integrity: basically a hash for (it works on my local but it breaks on production) avoiding this break and also to verify whatever is there in local machine is the same thing being deployed in production
    - should i put package-lock.json inside git
      - yes, maintains the list of what all dependencies are needed or installed for the project

  - node_modules

    - contains all the downloaded modules or packages from npm (collection of dependencies)
    - heaviest object in the universe
    - database contains actual data of that dependencies or packages installed
    - why there are a lot of other packages than parcel or installed package?

      - because our project need dependency parcel and parcel as project has its own dependency, and those dependency can have their own dependency, known as transitive dependencies

    - should i put node_modules inside git

      - no, if there is package.json and package-lock.json in project repo, node_modules can be regenerated or recreated

    - npm version: major.minor.patch
      - caret(^): will automatically upgrade the package with the minor updates along with patch updates.
      - tilde(~): used to match recent patch version

  - bundler

    - most important package in project
    - used for minification, caching, compression and bundling the files in project
    - weppack, parcel, vite

  - parcel: is a beast

    - chunking, minification during development phase
    - for ignition our app & setup of parcel: npm install -D parcel
    - devDependencies (-D): dependencies are required during development mode
    - how is parcel is managing all those node_modules by itself?
    - How npm knows parcel has those its dependencies? what are those dependencies?
    - What parcel does?
      - dev build
      - build local server
      - auto refreshing page: HMR(Hot Module Reloading)
        - uses File Watching Algorithms (written in c++)
      - caching: faster development builds
        - where its caching things: .parcel-cache
          - .parcel-cache
            - cache folder contains cached assets like js/css bundles etc..
            - tmp - contains the temporary files
      - image optimization
      - minify, bundle and compress files †o production
      - consistent hashing algorithm to cache things up
      - diagnostic
      - error handling
      - https
      - zero config - no need of many configurations. No configuration is required in order to use parcel in the application.
      - tree shaking: remove unused codes
      - code splitting
      - differential bundling: when app is hosted, app can be open in IE and older versions of IE, firefox and parcel takes care of all these by giving differential bundling to app and hence app runs smoothly in older browsers as well
      - creates different dev and production bundles
        - npx parcel build index.html
        - generates dist
    - A lot people thinks react apps are fast because react is fast 😂 but when we build large scale production ready applications, we need a lot of other things that bundlers doing to optimize

  - In our whole projects how many package.json and package-lock.json do we have?
    - every dependencies will have package.json and has transitive dependencies

- Actual Ignition of app using parcel

  - npx parcel index.html
    - npx: execute npm package
    - generates development build of project and store in dist folder and on update of any files, parcel was using cache and dist on HMR
  - npm i react react-dom
    - after installation, import react to code
  - npm parcel build index.html
    - parcel modifies by minifying, bundling the files into 3 and store in dist

- CDN links is not preferred way to bring React and ReactDOM into project

  - fetching from cdn is costly operations, will make network calls to api
  - easy thing is we already have react in node modules so easy to install
  - if new version of React comes, we have to keep updating cdn url links.

- browser scripts cannot have imports or exports

  - injecting script inside html takes this as a browser script and considering as normal javascript by not understanding imports or exports
  - we tell browser that the script is module by passing attribute type="module"

- making app compatible for older browsers
  - use browserlist

## some git terms

`git init`: Initializes an empty Git repository in the current directory.
`git add README.md`: Adds the file README.md to the staging area for the next commit.
`git commit -m "first commit"`: Records changes to the repository with a commit message of "first commit".
`git branch -M main`: Renames the branch from the default master to main.
`git remote add origin https://github.com/`: adds a remote repository URL to the local Git repository.
`git push -u origin main`: pushes the local changes to the remote repository's "main" branch, setting the upstream reference for future pushes.
`npm init -y`: initializes a new Node.js project with default settings, automatically answering "yes" to all prompts.

1. [npm](#npm)
2. [Parcel/Webpack](#bundlers---webpack-parcel)
3. [.parcel-cache](#parcel-cache)
4. [npx](#npx)
5. [Differences-between-devDependencies-and-dependencies](##differences-between-dependencies-and-devdependencies)
6. [Tree-shaking](#what-is-tree-shaking)
7. [Hot-module-replacement](##hot-module-replacement)
8. [SuperPowers-of-parcel](##super-powers-of-parcel)
9. [.gitignore](##gitignore)
10. [Difference-between-package.json-and-package--lock.json](##difference-between-packagejson-and-package-lockjson)
11. [Why-should-I-not-modify-`package-lock.json`](##why-should-I-not-modify-`package-lock.json)
12. [node_modules](##node_modules)
13. [Dist-Folder](##dist-folder)
14. [Read-about-different-bundlers](##read-about-different-bundlers)
15. [Read-about-caret-and-tilde](##read-about-caret-and-tilde)
16. [Read-about-script-types-in-html](##read-about-script-types-in-html)
17. [Practical](#Practical)
18. [References](#References)
19. [browserslist](##browserslist)

# Bundlers - webpack, parcel

1. What are bundlers?

A bundler is a development tool that combines many JavaScript code files into a single one that is production-ready loadable in the browser

Bundlers are tools that help you write code in modules and then bundle them together into small packages to be used in the browser. They take away the hassle of manually creating scripts and linking them together. They also help you to use the latest JavaScript features, regardless of whether your users’ browsers support them.

## What is `Parcel/Webpack`? Why do we need it?

Parcel/Webpack is a bundler that means all the javascript code written in different files and folders
including all the dependencies and packages are bundled and minified in a single file which is then given
to the browser.
They provide many different advantges like Hot Module Replacement, Caching etc.

## Read about different bundlers

2. Examples of Bundlers:

- webpack
- parcel
- rollup
- browserify
- vite
- esbuild

## vite

Vite is a new breed of frontend build tool that significantly improves the frontend development experience. It consists of two major parts:

- A dev server that provides rich feature enhancements over native ES Module imports
- A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production

3. What is webpack?

webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

4. What is parcel?

- Parcel is the beast

Parcel is a web application bundler, differentiated by its developer experience. It offers blazing fast performance utilizing multicore processing, and requires zero configuration.

## Super powers of parcel

- bundles all our code and build minified production ready
- hot module REPLACEMENT - HMR
- watching our file in changes - File Watcher Algorithm C++ - Parcel keeps analyzing the files and automatically updates the changes which
  are being made ny the developer in the project.
- Bundling
- Minifing our code
- Cleaning our code
- dev and production build
- super fast build algorithm
- Image optimization
- CSS, JS optimization
- Caching while development - Caching improves the performance of the application. Once cache has
  been created then the subsequent builds will take lesser time which makes the application faster.
- compatible with older versions of browsers
- https on dev
- port number
- consistent hashing algorithm to cache things up
- zero config - no need of many configurations. No configuration is required in order to use parcel in the application.
- differential bundling - when app is hosted, app can be open in IE and older versions of IE, firefox and parcel takes care of all these by giving differential bundling to app and hence app runs smoothly in older browsers as well
- tree shaking - remove unused codes
- code splitting
- diagnostic
- error handling
- dev and production build
- no need of webpack.config.js

[Parcel Development](https://parceljs.org/features/development/)

## Transitive Dependencies

1. What are transitive dependencies?

Transitive dependencies are dependencies of your dependencies. They are dependencies that are not explicitly listed in your package.json file, but are installed as a result of installing other dependencies.

## Dependency Tree

1. What is dependency tree?

Dependency tree is a tree structure that shows the dependencies of a project.

Q. What factors affect on buliding development ready or production ready app?

- size of the app
- size of the code
- size of the dependencies
- size of the libraries
- size of the frameworks

# npm

1. What is npm?

NPM is a package manager for all the modules and packages that are used in a projects.
NPM is used for installing packages and publishing our own packages as well.

    - package installation,
    - version management, and
    - dependency management.

https://github.com/npm/npm-expansions/blob/master/expansions.txt

- is used to manage our packages

Q. Why do we want npm in react app?

- react runs on other super powers given by various other packages. to handle these packages npm is needed in react app.

## Installing parcel using npm as devDependency

- npm install -D parcel-bundler

### Explanation

- `npm install -D parcel-bundler`

- `npm install` - install all the dependencies
- `-D` - install as devDependency
- `parcel-bundler` - package name

Q. What is devDependencies?

- devDependencies are the packages that are used in development only. They are not required in production.

## Differences between dependencies and devDependencies?

- dependencies are the packages that are required in production.
- devDependencies are the packages that are used in development only. They are not required in production.
- The devDependencies are those dependencies which are installed only the developer machine but dependencies on the
  other hand project depends to run everywhere.

# package.json

1. What is package.json?

package.json is a file that is used to store metadata related to the project. This file is also used to specify the project dependencies.

3. What is the use of npm init?

npm init is used to create a package.json file.

4. What is the use of npm install?

npm install is used to install all the dependencies of the project.

5. What is the use of npm install -D?

npm install -D is used to install all the devDependencies of the project or used for development and as a development dependency.

6. What is the use of npm install -g?

npm install -g is used to install a package globally on your system.

7. What is the use of npm install -S?

npm install -S is used to install a package and save it as a dependency in package.json.

## Read about caret and tilde

`Major.Minor.Patch` ---> 1.2.3

1. What is caret(^)? - used for automatically updating the `minor` updates along with patch updates.

The caret (^) is used to match the most recent major version (the middle number). For example, ^1.2.3 will match all 1.x.x versions but will hold off on 2.0.0.

2. What is tilde(~)? - matches the most recent `patch` version.

The tilde (~) is used to match the most recent minor version (the last number). For example, ~1.2.3 will match all 1.2.x versions but will hold off on 1.3.0.

## package-lock.json

1. What is package-lock.version?

package.lock.json is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. It is used to ensure that the same versions of dependencies are installed when you run npm install on another machine.

2. Key to remember in package-lock.version:

- package-lock.version is a property in package-lock.json file. It is used to specify the version of the package-lock.json file format.
- has integrity: maintains the hash of the package-lock file which insures what version of package was running on my system and is exactly the same on production.
- important file, lock the version packages , `never have to keep in .gitignore`

## Why not to use cdn links for react

- has to change the version in link if changes.
- unpkg
- react is available in cdn js not in server

# React

1. What is React?

React is a JavaScript library for building user interfaces.

## Installing React using npm

- `npm install react react-dom`

# npx

1. What is npx?

npx is a package runner tool that comes bundled with npm 5.2+. npx is tool which allows to run executables from the packages without letting the packages to be installed
globally. It also automatically installs the package if not installed already.

- means execute using npm

`npx parcel index.html`

- execute parcel using npm and give entry point index.html
- creates development build for us and it's hosted on our server
- creates -parcel.cache
- All the development ready files will be in dist folder
- create a server and enabled HMR

`npx parcel build index.html`

- creates production build for us and it's hosted on our server
- All the production ready files will be in dist folder

- `npx` - execute using npm
- `parcel` - package name
- `index.html` - entry point file name

# module

1. What is module?

A module is a piece of code that is used to perform a specific task. It is a collection of functions and data.

In Parcel,

## Hot module replacement

Hot Module Reloading is a feature that allows you to update the code of your app without reloading the entire page. It is a feature that is available in webpack and parcel.
When the developer saves the project then parcel automatically updates the modules in runtime without letting
the developer to reload the page.

3. How HMR works?

HMR works by replacing modules in the browser without a full reload. This means that the state of your app is preserved. You can edit your components and see the changes without losing the state of your app.

There is sth known as `File Watcher Algorithm`, written in C++.

# parcel–cache

4. What is .parcel-cache?

.parcel-cache is a directory that contains all the cache files of parcel.
This is a directory which is created when the build of the project is created. Parcel stored information
about the project like what dependencies are being used. For the first build, parcel takes time but for the
subsequent builds it will take lesser time as it will use the cache already created.
Inside the directory:

- cache - contains the cache files
- tmp - contains the temporary files
- HMR
- File Watcher Algorithms
- Minification of files
- random binary files

5. What is .cache?

.cache is a directory that contains all the cache files of webpack.

6. What is cache files?

Cache files are files that are created by the bundler to speed up the build process.

## dist folder

1. What is dist folder?

dist folder is a directory that contains all the files that are generated by the bundler. dist is the folder which is created when the build of the application is created. It contains the bundled
and minified code. It contains all the assets of the application all the images and media which is
processed and optimized as part of the build.

- minified files by parcel, webpack
- production ready files

Q. How do I make my app compatible with older browsers using browserlist?

- add browserslist in package.json
- add browserslist in .babelrc

## What is Tree Shaking?

Tree Shaking is also called Dead Code Elimination. Parcel analyzes all the modules for imports and exports
and eliminates all the things which are unused. Works for both dynamic and static imports.

## gitignore

## What is `.gitignore`? What should we add and not add into it?

.gitignore is a file in which those files are added which are not supossed to be tracked by git while
pushing to the git repository.

## Difference between package.json and package-lock.json

package.json defines all the packages and modules with their version on which the application is running on
and also defines all the scripts which are created by the developers. It contains all the metadata about the
application

package-lock.json file is generated automatically which contains locks the versions of the dependencies
on the which the application is running and also contains the record of all the dependencies and their dependencies
on which the application is running. So when someone will install the project they will have the same
version of the dependencies.

## Why should I not modify `package-lock.json`?

If package-lock.json is modified then it might lead to inconsistency and conflicts in the versions of the dependencies
and may cause problem is successful installation of the application.

## node_modules

1. What is node_modules?

node_modules is a directory that contains all the dependencies of the project.

- database of npm
- heaviest object in the universe

## What is `node_modules` ? Is it a good idea to push that on git?

node_modules is a folder where all the dependencies and dependencies of the dependencies resides.
The node_modules folder can be regenerated so it can be avoided while pushing.

## [browserslist](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z)

## What is `browserlists`?

It is a package which defines the list of browsers on which the application will work. The developer
can define the list of browsers manualy on which the devleoper wants the application to be working.
For production build :
npx parcel build <entry_point>

## Why react is fast?

It is not only the virtual DOM that makes React faster but other components like bundlers (e.g. parcel, webpack ,vite etc. ) and development ecosystme also.

Parcel Commands :
For development build:
npx parcel <entry_point>

For production build:
npx parcel build <entry_point>

## Read about script types in html

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script

# Practical

- intialize `npm` into your repo
- install `react` and `react-dom`
- remove CDN links of react
- install parcel
- ignite your app with parcel
- add scripts for “start” and “build” with parcel commands
- add `.gitignore` file
- add `browserlists`
- build a production version of your code using `parcel build`

# References

- [Creating-your-own-create--react--app](https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658)
- [Parcel Documentation](https://parceljs.org/getting-started/webapp/)
- [Parcel on Production](https://parceljs.org/features/tarproduction/)
- [browserslist](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z)
