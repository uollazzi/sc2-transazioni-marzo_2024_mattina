import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransazioniListComponent } from './components/transazioni-list/transazioni-list.component';
import { TransazioneDetailComponent } from './components/transazione-detail/transazione-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TransazioniListComponent,
    TransazioneDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
