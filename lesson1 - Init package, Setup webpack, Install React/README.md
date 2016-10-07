## Commands list

### Init a package.json
```bash
npm init
```

### Install webpack, webpack-dev-server and plugin for copy index.html file

```bash
npm install webpack webpack-dev-server copy-webpack-plugin --save-dev
```

### Install React

```bash
npm install react react-dom --save
```

### Difference between --save and --save-dev flags

--save-dev(or -D) - is save note about this plugin in package.json file as "devDependencies", what mean this plugin is needed only for development process;
--save(or -S) - save package as "dependencies", what mean is using only for production of this project(to represent the project and all important libraries what used in JavaScript code, like React).
