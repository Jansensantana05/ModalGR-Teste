import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { FormComponent } from './componentes/main/form/form.component';
import { CadastrarComponent } from './componentes/main/cadastrar/cadastrar.component';
import { ConfirmarComponent } from './componentes/main/confirmar/confirmar.component';
import { FinalizarComponent } from './componentes/main/finalizar/finalizar.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    FormComponent,
    CadastrarComponent,
    ConfirmarComponent,
    FinalizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskDirective,
  ],
  providers: [provideNgxMask({  })],
  bootstrap: [AppComponent]
})
export class AppModule { }
