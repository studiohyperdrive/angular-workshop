import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { Components } from './components';
import { Pages } from './pages';
import { Services } from './services';


@NgModule({
  declarations: [
    AppComponent,

    Components,
    Pages,
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
  ],
  providers: [
    Services,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
