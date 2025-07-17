# Sauce Demo Automation

Projeto de automação de testes para o site [Sauce Demo](https://www.saucedemo.com) utilizando Cypress.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM ou Yarn

## Instalação

Para instalar as dependências do projeto:

```bash
npm install
```

## Executando os testes

Para abrir o Cypress em modo interativo:

```bash
npm run cypress:open
```

Para executar os testes em modo headless:

```bash
npm run cypress:run
```

## Estrutura do projeto

- `cypress/e2e/`: Contém os arquivos de teste
  - `login.cy.js`: Testes de login
  - `purchase.cy.js`: Testes do fluxo de compra
- `cypress/support/`: Arquivos de suporte
  - `commands.js`: Comandos personalizados do Cypress
  - `e2e.js`: Configurações globais para os testes

## Casos de Teste

### Login (login.cy.js)

1. **Login com credenciais válidas**
   - Preenche o formulário com usuário "standard_user" e senha "secret_sauce"
   - Verifica se o login foi bem-sucedido redirecionando para a página de inventário
   - Valida a presença da lista de produtos na página

2. **Login com credenciais inválidas**
   - Preenche o formulário com usuário e senha inválidos
   - Verifica se a mensagem de erro é exibida corretamente

### Fluxo de Compra (purchase.cy.js)

1. **Compra completa**
   - Realiza login com usuário padrão
   - Adiciona o produto "Sauce Labs Backpack" ao carrinho
   - Navega para o carrinho e verifica se o produto foi adicionado corretamente
   - Prossegue para o checkout e preenche as informações de envio
   - Finaliza a compra
   - Verifica se a mensagem de confirmação é exibida

## Usuários disponíveis para teste

- standard_user
- locked_out_user
- problem_user
- performance_glitch_user

Senha para todos os usuários: `secret_sauce`

## Ferramentas utilizadas

Este projeto foi desenvolvido com o auxílio do Amazon Q, um assistente de IA da AWS que ajudou na criação da estrutura do projeto, implementação dos testes e resolução de problemas.