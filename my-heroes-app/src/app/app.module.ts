import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Routing
import { AppRoutingModule } from './app-routing/app.routing';
//Components
import { AppComponent } from './app.component';
import { HeroComponent } from './hero-component/hero.component';
import { VillianComponent } from './villian-component/villian.component';
//Services
import { HeroService } from './services/hero.service';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import { NewHeroComponent } from './new-hero/new-hero.component';
import { NewVillianComponent } from './new-villian/new-villian.component';
import { VillanService } from './services/villian.service';
import { ViewHeroComponent } from './view-hero/view-hero.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { FlashMessageComponent } from './flash-message/flash-message.component';
import { EditVillianComponent } from './edit-villian/edit-villian.component';
import { ViewVillianComponent } from './view-villian/view-villian.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    VillianComponent,
    ModalComponent,
    NewHeroComponent,
    NewVillianComponent,
    ViewHeroComponent,
    EditHeroComponent,
    FlashMessageComponent,
    EditVillianComponent,
    ViewVillianComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
   
  ],
  providers: [HeroService, VillanService, HeroComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
