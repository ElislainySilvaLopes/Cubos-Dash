# Configuração do Ambiente

Para que você possa executar esse projeto a partir de sua maquina recomendamos fortemente seguir os passos abaixo.

# Estrutura do projeto

cypress > integration: nesta pasta colocamos os nossos arquivos com os cenários de teste escritos no formato BDD.

cypress > support > steps: nesta pasta colocamos os passos que farão a conexão entre o que escrevemos em BDD e os scripts que fazemos em Cypress.

cypress > support > pageobjects: aqui colocamos os elementos da página. Tal organização permite que elementos sejam reutilizados e tenham fácil manutenção.

cypress > support > helper: nesta pasta colocamos os arquivos com funções auxiliares para a execução dos testes.

### 1. Instalar Node.js:

    Acesse o site oficial, baixe e instale a versão para seu computador.

### 2. Escolher uma IDE ou Editor:

    Para esse projeto foi utilizado o “Editor de Códigos” VSCode mas fique à vontade para utilizar qualquer um de sua preferência.

### 3. Baixando/ clonando o projeto:

    Nesse projeto foi ultilizado o Cypress com Cucumber seguindo o conceito de page objects.

    3.1 Crie uma pasta onde ficarão os arquivos do seu projeto.

    3.2 Dentro da pasta projetos faça o download ou clone do repositório.

    Para fazer o clone do repositório basta usar o seguinte comando no seu terminal:

        https://github.com/ElislainySilvaLopes/Cubos-Dash.git

### 4. Instalando dependências do projeto:

    Instalar o Cypress com Cucumber executando o seguinte comando na raíz da pasta do seu projeto: npm install

    instalar: Allure command line e allure cypress plugin
