import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ContainerComponent } from './components/container/container.component';
import { TitleComponent } from './components/container/title/title.component';
import { ContentComponent } from './components/container/content/content.component';
import { HeaderComponent } from './components/container/header/header.component';
import { FooterComponent } from './components/container/footer/footer.component';
import { ModalComponent } from './components/container/modal/modal.component';
import { EthComponent } from './components/cards/cardeth/eth.component';
import { BitComponent } from './components/cards/cardbit/bit.component';
import { BrlComponent } from './components/cards/cardbrl/brl.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    EventosComponent,
    ContainerComponent,
    TitleComponent,
    ContentComponent,
    HeaderComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    EthComponent,
    BitComponent,
    BrlComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
