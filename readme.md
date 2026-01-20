# CRUD de Contatos

API REST para gerenciamento de contatos usando Node.js, Express, MySQL e Prisma.

## Requisitos

- Node.js 14+
- Docker e Docker Compose

## Configuração

Clone o repositório e instale as dependências:
```bash
npm install
```

## Banco de Dados

Inicie o MySQL usando Docker:
```bash
docker-compose up -d
```

Aguarde alguns segundos para o MySQL inicializar completamente.

Sincronize o schema do Prisma com o banco:
```bash
npx prisma db push
npx prisma generate
```

### Conectar no MySQL (opcional)

Para acessar o MySQL diretamente via terminal:
```bash
docker exec -it portData_contact_mysql mysql -uroot -psenha123 portData_contact
```

Ou use clientes como MySQL Workbench:

- Host: `localhost`
- Porta: `3306`
- Usuário: `root`
- Senha: `senha123`
- Database: `portData_contact`

## Executar
```bash
npm start
```

A API estará disponível em `http://localhost:3000`

## Endpoints

- `POST /contatos` - Criar contato
- `GET /contatos` - Listar contatos
- `GET /contatos/:id` - Buscar por ID
- `PATCH /contatos/:id` - Atualizar contato
- `DELETE /contatos/:id` - Deletar contato

## Validações

O nome deve ter no mínimo 2 palavras com 3 letras cada.

## Parar o projeto
```bash
docker-compose down
```

Para remover os dados do banco também:
```bash
docker-compose down -v
```
