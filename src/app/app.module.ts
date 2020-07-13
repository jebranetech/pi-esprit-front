import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './core/components/top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HttpClientModule }    from '@angular/common/http';
import { TodoService } from './core/services/TestService';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
