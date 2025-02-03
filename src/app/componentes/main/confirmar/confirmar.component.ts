import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confirmar',
  standalone: false,
  
  templateUrl: './confirmar.component.html',
  styleUrl: './confirmar.component.css'
})
export class ConfirmarComponent {

  @Input() pessoa = {
    nome: '',
    CPF: '',
    dt_nasc: '',
    idade: '',
    email: '',
    CEP: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    estado: ''
  }

}
