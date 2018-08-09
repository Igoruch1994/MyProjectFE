import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserComponent} from './user/user.component';
import {HttpModule} from '@angular/http';
import {HoverDirective} from './hover.directive';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './search.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { SetupPageComponent } from './setup-page/setup-page.component';
import {RouterModule} from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'setup', component: SetupPageComponent},
  {path: 'login', component: LoginPageComponent}
];

@NgModule({
  declarations: [
    AppComponent, UserComponent, HoverDirective, SearchPipe, HomePageComponent, SetupPageComponent, LoginPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
