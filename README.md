# Angular
=================================================================================
## Angular Application Projects
=================================================================================
## 1. Angular6Project
---------------------------------------------------------------------------------
### Prerequisite:
<p>Node: 8.X</p>
<p>npm: 5.x</p>

### Upgrade npm:
<p> Run PowerShell as Administrator </p>

<ul><li>Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force</li>
<li>npm install -g npm-windows-upgrade</li>
<li>npm-windows-upgrade</li></ul>

### Upgrade Node:
<p>Download latest executable from here: https://nodejs.org/en/download/ </p>

### Check Node Version:
<p>node -v </p>

### Check npm Version:
<p>npm -v</p>

### Download/ Upgrade Angular CLI:
<ul><li>Fresh Installation: npm install -g @angular/cli</li>
<li>Upgrade: npm install -g @angular/cli@latest</li></ul>

### Angular CLI Version:
<p>ng -v</p>

### Creating a new Angular 6 project and all the required files with --skip-tests option to skip generating test files:
<p>ng new Angular6Project --skip-tests</p>

### Running the Angular 6 Project:
<ol><li>Go to the project directory:
	cd Angular6Project</li>
<li>Builds and launches the default browser and serves the application using the default port number 4200:
	ng serve --open (short cut command : ng s -o)</li></ol>
	
### Install Jquery and Bootstrap for Angular 6:
<p>npm install bootstrap@3 jquery --save</p>

### Adding Bootstrap and JQuery References in angular.json file as follows:
<p>"styles": [</p>
<p>"src/styles.css",</p>
<p>"node_modules/bootstrap/dist/css/bootstrap.min.css"</p>
<p>]</p>

<p>"scripts": [</p>
<p>"node_modules/jquery/dist/jquery.min.js",</p>
<p>"node_modules/bootstrap/dist/js/bootstrap.min.js"</p>
<p>]</p>

=================================================================================

