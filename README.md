ngClass
========
-adds and removes CSS classes on an HTML element

Syntax
=======
    <element [ngClass]="expression">...</element>
 
where 
-element is the DOM element to which class is being applied
-expression is evaluated and the resulting classes are added/removed from the element. The expression can be in various formats like string, array or an object

NgClass with a String
========================
    <element [ngClass]="'cssClass1 cssClass2'">...</element>

NgClass with Array
=====================
    <element [ngClass]="['cssClass1', 'cssClass2']">...</element>

NgClass with Object
=======================
    <element [ngClass]="{'cssClass1': true, 'cssClass2': true}">...</element>



Dynamically updating Class names
====================================
Using strings
cssStringVar: string= 'red size20';

Using arrays
cssArray:string[]=['red','size20']; 


Using JavaScript object
class CssClass {
  red: boolean= true;
  size20: boolean= true; 
}
# NgclassTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
