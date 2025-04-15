# BackEnd-HarryPotter.SQLRelationships

## Descrição do Projeto

Este projeto é uma API Back-End desenvolvida para gerenciar dados relacionados ao universo de Harry Potter. Ele utiliza relacionamentos SQL para estruturar e organizar as informações de forma eficiente, permitindo consultas e manipulações de dados relacionadas a personagens e casas!

## Funcionalidades

- **Gerenciamento de Personagens**: CRUD completo para personagens, incluindo atributos como nome, casa, linhagem, etc.
- **Casas de Hogwarts**: Relacionamento entre personagens e suas respectivas casas.
- **Consultas Relacionais**: Consultas otimizadas para explorar as conexões entre diferentes entidades do universo de Harry Potter.
- **Validação de Dados**: Garantia de integridade e consistência dos dados armazenados.

## Tecnologias Utilizadas

- **Linguagem**: Node.js
- **Banco de Dados**: MySQL com uso extensivo de relacionamentos (chaves primárias e estrangeiras).
- **Framework**: Express.js para construção da API.
- **Outras Ferramentas**: Postman para testes de API, dotenv para gerenciamento de variáveis de ambiente.

## Estrutura do Projeto

- `/models`: Contém os modelos do banco de dados e suas associações.
- `/routes`: Define as rotas da API para cada entidade.
- `/controllers`: Contém a lógica de negócios para manipulação de dados.
- `/config`: Configurações do banco de dados e variáveis de ambiente.

## Como Executar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/BackEnd-HarryPotter.SQLRelationships.git
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Configure o arquivo `.env` com as credenciais do banco de dados.
4. Inicie o servidor:
    ```bash
    npm start
    ```

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:
    ```bash
    git checkout -b minha-feature
    ```
3. Faça o commit das suas alterações:
    ```bash
    git commit -m "Minha nova feature"
    ```
4. Envie para o repositório remoto:
    ```bash
    git push origin minha-feature
    ```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Para dúvidas ou sugestões, entre em contato pelo e-mail: `enzoturcovic@gmail.com`.
