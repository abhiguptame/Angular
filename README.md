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
	ng serve --open (shortcut command : ng s -o)</li></ol>
	
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

### Angular 6 routing
<p> Creating employee(create-employee) component with no unit test files (--spec=false) and dedicated folder(--flat=true):</p>
<p>ng g c employee/create-employee --spec=false --flat=true</p>

<p> Creating employee(list-employees) component with no unit test files (--spec=false) and dedicated folder(--flat=true):</p>
<p>ng g c employee/list-employees --spec=false --flat=true</p>

### Why a separate routing module?
<ul><li>Separation of concerns</li>
<li>Maintainability</li></ul>

### Generate routing module (app-routing) with no dedicated folder and include routing module to root (app) module:
<p>ng g m app-routing --flat=true --module=app</p>

### There are 2 ways to create forms in Angular 
<p>1. Template Driven Forms ( All Codes are completely in HTML )</p>
<p>2. Reactive Forms (Also called Model Driven Forms and Reactive forms on the other hand allow us to build the form completely in code. )</p>

### With a reactive form, we create the entire form control tree in the component class code.
<p>Classes for creating a form control tree:</p>
<ul><li>FormGroup</li>
<li>FormControl</li></ul>

### Reactive FormsModule:
<p>formGroup directive: Binds 'form' element to FormGroup instance.</p>
<p>formControlName directive: Binds input element to FormControl instance</p>

### Angular form control and form group:
<p>Both FormControl and FormGroup classes inherit from AbstractControl base class.</p>
<p>The AbstractControl class has properties that help us track both FormControl and FormGroup value and state.</p>
### AbstractControl Class Properties:
<ul><li>value</li>
<li>errors</li>
<li>valid</li>
<li>invalid</li>
<li>dirty</li>
<li>pristine</li>
<li>touched</li>
<li>untouched</li></ul>

### To access a FormControl in a FormGroup:
<p>eg: employeeForm.controls.fullName.value</p>
<p>OR</p>
<p>employeeForm.get('fullName').value</p>

### AbstractControl class methods:
<ul><li>setValidators()</li>
<li>clearValidators()</li>
<li>updateValueAndValidity()</li>
<li>setValue()</li>
<li>patchValue()</li>
<li>Reset()</li></ul> 

### Nested Form Groups in Reactive Form:
<p> To group the form elements in the HTML, encapsulate the form elements in a div element and use the formGroupName directive on that container div element. Bind the formGroupName directive to the skills FormGroup instance in the component class. Bind each input element in the HTML, to the corresponding FormControl instance using the formControlName directive. </p> 

### Angular setValue() and patchValue():
<ul><li>Use setValue() to update all form control but not a subset of form control.</li>
<li>Use patchValue() to update a subset or all of form control.</li></ul>

=================================================================================
=================================================================================
### Install JQuery and Bootstrap:
<p>npm install bootstrap@3 jquery --save</p>

=================================================================================
