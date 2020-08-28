import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngclass-test';
  cssStringVar: string= 'red size20';
  cssArray:string[]=['red','size20']; 
  cssClass: CssClass = new CssClass();

}
class CssClass {
  red: boolean= true;
  size20: boolean= true; 
}
