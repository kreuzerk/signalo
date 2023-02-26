import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SimpleCounterComponent} from './simple-counter.component';
import {CounterObjectComponent} from "./counter-object.component";
import {UserFormComponent} from "./user/user-form.component";
import {UserListComponent} from "./user/user-list.component";
import {HttpClientModule} from "@angular/common/http";
import {PostsComponent} from "./posts/posts.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimpleCounterComponent,
    CounterObjectComponent,
    UserFormComponent,
    UserListComponent,
    HttpClientModule,
    PostsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
