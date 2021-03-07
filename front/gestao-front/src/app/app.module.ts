import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { CriarComponent } from './criar/criar.component';
import { AtualizarComponent } from './atualizar/atualizar.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CriarComponent,
    AtualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
