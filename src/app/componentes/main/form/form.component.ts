import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  pessoa = {
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

  validacao = {
    nome: false,
    cpf: false,
    idade: false,
    email: false,
    cep: false
  }

  efetivarCadastro = false;

  public patterns = {
    S: { pattern: /[A-Za-zÀ-ÖØ-öø-ÿÇç ]/ }
  };

  cadastrar() {
    if(this.validacao.nome === true && this.validacao.cpf === true && this.validacao.idade === true && this.validacao.email === true && this.validacao.cep === true){
      this.efetivarCadastro = true;
    }
  }

  mudarForm() {
    if(this.efetivarCadastro === true){
      return 'invisible'
    }
    return ''
  }

  mudarConfirmar(){
    if(this.efetivarCadastro === true){
      return 'visible'
    }
    return ''
  }

  validarNome() {
    if(this.pessoa.nome != ''){
      this.validacao.nome = true;
    } else {
      this.validacao.nome = false;
    }
  }

  mudarNome(){
    if(this.validacao.nome === true){
      return 'valido';
    }
    return ''
  }

  validarCPF() {
    if(this.pessoa.CPF.length === 11 ) {
      this.validacao.cpf = true;
    } else {
      this.validacao.cpf = false;
    }

  }

  mudarCPF(){
    if(this.validacao.cpf === true){
      return 'valido';
    }
    return ''
  }

  validarIdade() {
    if(this.pessoa.dt_nasc != ''){
      const idade = this.calcIdade()
      
      if(idade > 0 && idade <= 120){
        this.pessoa.idade = `${idade}`
        this.validacao.idade = true;
      } else {
        this.validacao.idade = false;
      }
    }
  }

  mudarIdade(){
    if(this.validacao.idade === true){
      return 'valido';
    }
    return ''
  }

  validarEmail() {
    console.log(this.validacao)
    console.log(this.pessoa)

    if(this.pessoa.email.indexOf("@") != -1 && this.pessoa.email.indexOf(".") != -1){
      this.validacao.email = true;
    } else {
      this.validacao.email = false;
    }
  }

  mudarEmail(){
    if(this.validacao.email === true){
      return 'valido';
    }
    return ''
  }

  async validarCEP() {
    if(this.pessoa.CEP.length === 8){
      const obj = await this.consumirCep();

      if(typeof obj === 'object' && !("erro" in obj)) {
        this.pessoa.logradouro = obj.logradouro;
        this.pessoa.bairro = obj.bairro;
        this.pessoa.cidade = obj.localidade;
        this.pessoa.estado = obj.estado;
        this.validacao.cep = true;
      } else {
        this.validacao.cep = false;
      }
    }
  }

  mudarCEP(){
    if(this.validacao.cep === true){
      return 'valido';
    }
    return ''
  }

  calcIdade() {
      const dt_nasc = new Date(this.pessoa.dt_nasc);
      const hoje = new Date();

      let idade = hoje.getFullYear() - dt_nasc.getFullYear();

      const mesAtual = hoje.getMonth();
      const diaAtual = hoje.getDay();
      const mesNasc = dt_nasc.getMonth();
      const diaNasc = dt_nasc.getDay();

      if(mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
        idade--
      }

      return idade;
  }

  async consumirCep() {
    const URL = `https://viacep.com.br/ws/${this.pessoa.CEP}/json`;

    const resp = await fetch(URL);
    if(resp.status === 200) {
    const obj = await resp.json();
      return obj
    } 
  }
}