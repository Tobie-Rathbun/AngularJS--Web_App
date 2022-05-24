
//  javascript
//      let firstName = "Fred" ;
//  typescript
//      let firstName: string = 'Fred' ;


//  initialize variable (ts)
let shoeColor: string = 'blue' ;
console.log(shoeColor);


//  changes color to red
shoeColor = 'red' ;
//  logs shoe color
console.log(shoeColor)


//  sets shoe size and stock percentage
let size: number = 12 ;
let stockPercentage: number = 93.69 ;
//  all numbers are held with number


//  addition
const a: number = 4 ;
const b: number = 6 ;
console.log(a + b) ;

//  changes variable
let isRegistered: boolean ;
isRegistered = false ;
console.log(isRegistered) ;


//  enums are collections of constants
enum cupSize {
    SMALL = "Smallest cup size",
    MEDIUM = "Medium cup size",
    LARGE = "Large cup size",
    XLARGE = "Largest cup size"
}
console.log(cupSize.LARGE) ;
//  outputs  "Large cup size"



//  any data type
let userData: any ;

userData = 22;
console.log(userData) ;
    //  outputs 24

userData = "free";
console.log(userData + "man") ;
    //  outputs freeman

userData = '22';
if (typeof(userData) === 'number'){
    userData += 2 ;}
else {
    userData += 8 ;}
    //  outputs 228


//  new data type
interface Order {
    customName: string ,
    itemNumbers: number[] ,
    isCompleted?: boolean }
            //  question mark implies that a field isn't mandatory
    //  interface is a data structure that shows data shapes (types)

//  fulfills the "contract" of the interface
let order1: Order;
order1 = {
    customName: "Tobie" ,
    itemNumbers: [123,44,232] ,
    isCompleted: false }

//  app
//      app.component.css
//      app.component.html
    //      the view - receives variables from the component and displays them
//      app.component.ts
    //      the component
//      app.module.ts


let studentName = "star student" ;
//  html
//  Hello {{studentName}}!
//  outputs Hello star student!
//  {{}} is called interpolation, insertion of a variable

//  component:
let title = "Star Trek" ;

import { provide } from 'vue';
//  view:
    //  <div><p>
    //  the title of the movie is {{title}}
    //  </p></div>

//  iterating through arrays
    //  colors:string[] = ["red", "green", "yellow", "blue"] ;
    //  html
    //  <div *ngFor='let color of colors'>
    //      {{color}}
    //  </div>
        //  outputs each item in array within a div
        // structural directive

//  <div *ngFor='let fruit of fruits; let i=index'>
//      Fruit {{i}} is a {{fruit}}
//  </div>
    // outputs Fruit 1 is a pear etc.

//  save to car.ts
    //  export interface Car {
    //      make: string ;
    //      model: string ;
    //      miles: number ;}

//  on main TypeScript
  //  import { Car } from './car';

//  creating new entities
    //  toyota: Car = {make: 'Toyota', model: 'Camry', miles: 111777};
    //  ford: Car = {make: 'Ford', model: 'Mustang', miles: 17177};
    //  lamborghini: Car = {make: 'Lamborghini', model: 'Gallardo', miles: 71177};
    //  cars: Car[] = [this.toyota, this.ford, this.lamborghini];

//  view (html)
    //      <div *ngFor = "let car of cars">
    //          {{car.make}} {{car.model}} with a mileage of {{car.miles}}
    //      </div>

//  CLI
    //  ng generate service transportation
        //  generates empty service within the Angular application
    //  import { Injectable } from '@angular/core';
    //  @Injectable({
    //      providedIn: 'root' })
    //  export class TransportationService {
        //  class body (exports data)
    //      constructor() {} }


import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root',
})

export class TransportationService {
  // other code here
  toyota: Car = {make: 'Toyota', model: 'Camry', miles: 111777};
  ford: Car = {make: 'Ford', model: 'Mustang', miles: 17177};
  lamborghini: Car = {make: 'Lamborghini', model: 'Gallardo', miles: 71177};

  cars: Car[] = [this.toyota, this.ford, this.lamborghini];

  constructor() { }

  // other code here
  getCars() {
    return this.cars;
  }
}

//  dependency injection

//  import service
//  import { TransportationService } from './transportation.service';

//  inject service
//  cars: Car[];
//    constructor (private transportationService: TransportationService) {
//    this.cars = this.transportationService.getCars(); }


// inject service
