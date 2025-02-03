# CadastroDePessoasModalGR

Esse projeto foi feito utilizando o [Angular CLI](https://github.com/angular/angular-cli) versão 19.1.5.

## Development server

Para iniciar um servidor de desenvolvimento local, execute:

```bash
ng serve
```

Assim que o servidor estiver em execução, abra seu navegador e navegue até `http://localhost:4200/`. O aplicativo será recarregado automaticamente sempre que você modificar qualquer um dos arquivos de origem.

### Sobre o Projeto

Projeto desenvolvido como teste tecnico para a Formação ModalGR

A equipe de RH da ModalGR solicitou o desenvolvimento de um sistema de cadastro de pessoas utilizando TypeScript/JavaScript, sendo preferencialmente desenvolvido em Angular. o sistema deverá conter os seguintes campos e validações. O sistema deve estar devidamente estilizado e realizar uma integração com a API ViaCEP para preenchimento automático do endereço com base no CEP informado. 

Campos do formulário e validações:

1. Nome: Deve conter até 150 caracteres, permitindo apenas letras (incluindo espaços e caracteres acentuados, se aplicável). Campo obrigatório.

2. CPF: Deve ser um CPF com 11 dígitos numéricos e ser formatado automaticamente para 000.000.000-00. Deve ser validado para garantir que o CPF é valido. Campo obrigatório.

3. Data de nascimento: Deve ser uma data válida. Campo obrigatório.

4. E-mail: Deve conter até 200 caracteres. Deve seguir o formato padrão de e-mail (exemplo: nome@dominio.com). Campo obrigatório.

5. CEP: Deve conter 8 dígitos numéricos e ser formatado automaticamente para 00000-000. o Deve ser validado para garantir que o CEP existe. o Campo obrigatório. Integração com a API ViaCEP: Após a inserção do CEP, o sistema deve consultar a API ViaCEP para preencher os campos de logradouro, bairro, cidade e estado.


### Funcionamento

Ao clicar no botão Cadastrar, o sistema deve:
1. Validar os campos preenchidos.
2. Consultar a API ViaCEP para obter o endereço correspondente ao CEP informado.
3. Exibir os dados cadastrados em uma tabela contendo: Nome, E-mail, Idade (calculada com base na data de nascimento e o momento atual), CPF, CEP ,Logradouro ,Bairro, Cidade, Estado

O sistema deve ser estilizado e garantir uma experiência amigável ao usuário.

## Minha Experiencia

Me desafiei a aprender o Framework Angular, sendo minha primeira experiencia. Me sinto satisfeito com o resultado com base no tempo que tive para estudar o Framework. O projeto precisa de refatoração na sua logica de funcionamento para reduzir a repetição de código, mas inicialmente necessito aumentar minha base de conhecimento para conseguir fazer tal de melhor forma. A estilização da pagina pode melhorar muito, pois escolhi um estilo simplista, pois meu foco foi aprender essa nova ferramenta.  