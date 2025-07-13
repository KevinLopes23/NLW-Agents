# 🤖 NLW Agents - Backend

Uma API inteligente que permite criar salas de estudo com processamento de áudio e perguntas contextualizadas usando IA.

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/en/) - Runtime JavaScript
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript
- [Fastify](https://www.fastify.io/) - Framework web rápido e de baixo overhead
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional
- [DrizzleORM](https://orm.drizzle.team/) - ORM TypeScript-first
- [Google Gemini](https://deepmind.google/technologies/gemini/) - IA para processamento de áudio e geração de respostas

## 📋 Funcionalidades

### Salas de Estudo

- Criação de salas temáticas
- Upload de áudios de aulas/conteúdo
- Sistema de perguntas e respostas contextualizado

### Processamento de Áudio

- Transcrição automática de áudio para texto
- Geração de embeddings para busca semântica
- Armazenamento otimizado em chunks

### Sistema de Perguntas

- Busca semântica nos chunks de áudio
- Respostas contextualizadas baseadas no conteúdo
- Histórico de perguntas e respostas por sala

## 🛠 Estrutura do Projeto

```
src/
├── db/                    # Configuração e schemas do banco
│   ├── migrations/        # Migrações do banco de dados
│   └── schema/           # Definição das tabelas
├── http/                  # Rotas e handlers HTTP
│   └── routes/           # Definição das rotas da API
└── services/             # Serviços externos (Gemini)
```

## 🚦 Rotas da API

### Salas

- `POST /rooms` - Cria uma nova sala
- `GET /rooms` - Lista todas as salas

### Áudio

- `POST /rooms/:roomId/audio` - Upload de áudio para uma sala

### Perguntas

- `POST /rooms/:roomId/questions` - Cria uma nova pergunta
- `GET /rooms/:roomId/questions` - Lista perguntas de uma sala

## ⚙️ Como Executar

### Pré-requisitos

- Node.js v22 ou superior
- PostgreSQL com extensão `vector` instalada
- Chave de API do Google Gemini

### Configuração

1. Clone o repositório

```bash
git clone https://github.com/KevinLopes23/NLW-Agents-Back.git
cd NLW-Agents-Back
```

2. Instale as dependências

```bash
npm install
```

3. Configure as variáveis de ambiente

```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

4. Execute as migrações

```bash
npm run db:migrate
```

5. Inicie o servidor

```bash
npm run dev
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.


## 📬 Contato

Se você tiver alguma dúvida ou sugestão sobre o projeto, fique à vontade para abrir uma issue ou enviar um pull request.
