# NLW Agents

Projeto desenvolvido durante o evento NLW da Rocketseat. Uma API REST para gerenciamento de salas de chat com suporte a vetores.

## 🛠️ Tecnologias

- Node.js
- TypeScript
- Fastify
- PostgreSQL com pgvector
- Drizzle ORM
- Docker
- Zod

## 📋 Pré-requisitos

- Node.js 20+
- Docker
- npm ou pnpm

## 🚀 Instalação

1. Clone o repositório

```bash
git clone https://github.com/KevinLopes23/NLW-Agents.git
cd NLW-Agents
```

2. Instale as dependências

```bash
npm install
```

3. Configure as variáveis de ambiente

```bash
# Crie um arquivo .env com:
PORT=3333
DATABASE_URL="postgresql://docker:docker@localhost:5432/agents"
```

4. Inicie o banco de dados

```bash
docker-compose up -d
```

5. Execute as migrações

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

6. Inicie o servidor

```bash
npm run dev
```

## 🏗️ Estrutura do Projeto

- `/src` - Código fonte
  - `/db` - Configurações do banco e schemas
  - `/http` - Rotas e controllers
- `/docker` - Configurações Docker
- `drizzle.config.ts` - Configuração do Drizzle ORM

## 📝 Licença

Este projeto está sob a licença ISC.
