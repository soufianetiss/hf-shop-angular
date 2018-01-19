import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { NearByComponent } from './near-by/near-by.component';
import { PreferredComponent } from './preferred/preferred.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { AuthenticationService } from './authentication.service';

const routes: Routes = [
  { path: 'nearby', component: NearByComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'preferred', component: PreferredComponent }
 ];
@NgModule({
  declarations: [
    AppComponent,
    NearByComponent,
    PreferredComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
