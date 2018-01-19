import { Component, Renderer, ElementRef, ViewChild } from '@angular/core';
import {Routes, RouterModule,Router} from "@angular/router";
import { NearByComponent } from './near-by/near-by.component';
import { PreferredComponent } from './preferred/preferred.component';
import $ from "jquery";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('menuToggle') menuToggle:ElementRef;
  title = 'Shop-app';
  router=null;
  constructor(private _router: Router ) {
    this.router = _router;
    console.log(this.router);
    
  }
  navClick(){
    //console.log(document.getElementById("menuToggle").offsetHeight);
    if( document.getElementById("menuToggle").offsetHeight>0)
      this.menuToggle.nativeElement.click();
  }
}
