import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroServiceComponent } from './hero-service/hero-service.component';
import { TestimolansFootersComponent } from './testimolans-footers/testimolans-footers.component';
import { IndustryInfoComponent } from './industry-info/industry-info.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroServiceComponent,
    TestimolansFootersComponent,
    IndustryInfoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
