import {Component, OnInit ,Input} from '@angular/core';
@Component({
  selector: 'app-test',
  //if statement
 /*`<div *ngIf="displayName; then thenBlock; else elseBlock"></div>
  <ng-template #thenBlock>
  <h2 >Codevolution</h2></ng-template>
  <ng-template #elseBlock>
  <h2 >Hidden</h2></ng-template>`,*/
   //switch statement
 /* `<div [ngSwitch]="color">
  <div *ngSwitchcase="'red'">you picked red color</div>
  <div *ngSwitchcase="'blue'">you picked blue color</div>
  <div *ngSwitchcase="'green'">you picked green color</div>
  <div *ngSwitchDefault> pick again</div>
  </div>`,*/
  /*`<div *ngFor="let color of colors;index as i; "> 
  <h2> {{i}} {{color}}</h2>
  </div>`, 
  //`<div *ngFor="let color of colors;first as f; "> 
  <h2> {{f}} {{color}}</h2>
  </div>`,
  //`<div *ngFor="let color of colors;last as l; "> 
  <h2> {{l}} {{color}}</h2>
  </div>`,
  // `<div *ngFor="let color of colors; odd as o"> 
  <h2>{{o}} {{color}}</h2>
  </div>`,
  //`<div *ngFor="let color of colors; even as e"> 
  <h2>{{e}} {{color}}</h2>
  </div>`,
 
  template: `<h2>{{"Hello "+ parentData}}</h2>`, */
  templateUrl: `test.component.html`,
  
  styles: []
})
export class TestComponent implements OnInit {
  /*//displayName=false;
 // public color="blue";
 //@Input() public parentData;
//public name="codevolution";
//public message="welcome to codevolution";
public person={
  "firstName":"john",
  "lastName":"Doe"
}
public date = new Date();*/
 constructor() { 
}
  ngOnInit(){

  }
}
