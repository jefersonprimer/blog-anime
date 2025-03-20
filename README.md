markdown
# Projeto Blog de Animes

Este projeto é um blog dedicado a animes, onde você pode encontrar informações detalhadas, resenhas, notícias e muito mais sobre seus animes favoritos.

## Detalhes do Projeto

*   **Objetivo:** Criar uma plataforma abrangente para entusiastas de animes, fornecendo conteúdo de qualidade e uma comunidade engajada.
*   **Funcionalidades:**
    *   Postagens detalhadas sobre diversos animes.
    *   Categorização por gênero, temporada, etc.
    *   Sistema de comentários para interação dos usuários.
    *   Possibilidade de busca por título ou palavra-chave.
    *   Design responsivo, acessível em qualquer dispositivo.
*   **Tecnologias utilizadas:**
    *  Next.js
    *  Typescript
    *  TailwindCSS
    *  Strapi CMS

## Como Clonar e Executar o Projeto

Siga as etapas abaixo para clonar e executar o projeto em sua máquina local:

### Pré-requisitos

1.  **Node.js e npm:** Certifique-se de ter o Node.js e o npm instalados em sua máquina. Você pode verificar se estão instalados digitando `node -v` e `npm -v` no seu terminal.
    *   Caso não esteja instalado: [https://nodejs.org/](https://nodejs.org/)
2.  **Git:** O Git deve estar instalado para clonar o repositório. Verifique com `git --version`.
    *   Caso não esteja instalado: [https://git-scm.com/](https://git-scm.com/)

### Clonando o Repositório

1.  Abra seu terminal e navegue até o diretório onde deseja clonar o projeto.
2.  Execute o seguinte comando para clonar o repositório:

    ```bash
    git clone https://github.com/jefersonprimer/blog-anime
    ```

    Substitua `<URL_DO_SEU_REPOSITORIO>` pela URL real do seu repositório no GitHub, GitLab, etc.
3. Entre na pasta que foi criada

    ```bash
    cd blog-anime
    ```

### Executando o Projeto

1.  **Instalando Dependências:** Navegue até o diretório raiz do projeto (onde o arquivo `package.json` está localizado) no seu terminal e execute o seguinte comando para instalar todas as dependências do projeto:

    ```bash
    npm install
    ```

2. **Executando projeto de desenvolvimento**
   ```bash
    npm run dev
   ```

3. **Acesse**
   Acesse o projeto atráves do link gerado ao executar o passo acima. (normalmente é localhost:3000)
   
4. **Executando projeto de produção**
   ```bash
    npm run build
    npm run start
   ```

### Configuração do Strapi

1. O projeto ultiliza o Strapi para o gerenciamento do back-end.
2. Caso esteja baixando o projeto pela primeira vez, será necessario configurar o strapi em seu computador.
3. Acompanhe o passo a passo no site oficial [https://strapi.io/](https://strapi.io/)
