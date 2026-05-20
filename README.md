# Sistema de Cubagem Logística

Aplicação Full Stack para cadastro de produtos e cálculo automático de cubagem logística.

O projeto foi desenvolvido utilizando arquitetura MVC no backend e integração completa entre API REST e frontend React.

---

# Tecnologias Utilizadas

## Backend

- Node.js
- Express
- MVC
- Middleware
- Cors
- Dotenv
- Swagger

## Frontend

- React
- Axios
- Bootstrap

---

# Funcionalidades

- Cadastro de produtos
- Cálculo automático de cubagem
- Cálculo do peso utilizado
- API REST
- Integração Frontend + Backend
- Documentação Swagger
- Interface clean e minimalista

---

# Regra de Negócio

O sistema calcula a cubagem do produto utilizando a fórmula:

```txt
(Largura × Altura × Comprimento) / 6000
```

Após isso:

- Se o peso real for maior → utiliza o peso real
- Se a cubagem for maior → utiliza a cubagem

---

# Campos do Produto

- SKU
- Nome
- Largura
- Altura
- Comprimento
- Peso

---

# Estrutura do Projeto

```txt
frontend-backend/
│
├── backend/
│
└── frontend/
```

---

# Backend

## Instalação

```bash
cd backend
npm install
```

## Rodar servidor

```bash
npm run dev
```

Servidor:

```txt
http://localhost:3000
```

---

# Swagger

Documentação da API:

```txt
http://localhost:3000/docs
```

---

# Frontend

## Instalação

```bash
cd frontend
npm install
```

## Rodar aplicação

```bash
npm start
```

Aplicação React:

```txt
http://localhost:3001
```

ou

```txt
http://localhost:3000
```

(dependendo da porta utilizada)

---

# Endpoints

## Listar produtos

```http
GET /produtos
```

---

## Criar produto

```http
POST /produtos
```

### Exemplo Body

```json
{
  "sku": "ABC123",
  "nome": "Notebook Gamer",
  "largura": 40,
  "altura": 30,
  "comprimento": 20,
  "peso": 2
}
```

---

# Exemplo de Resposta

```json
{
  "sku": "ABC123",
  "nome": "Notebook Gamer",
  "largura": 40,
  "altura": 30,
  "comprimento": 20,
  "peso": 2,
  "cubagem": 4,
  "pesoUtilizado": 4
}
```

---

# Fluxo da Aplicação

```txt
Frontend React
      ↓
Axios
      ↓
API Express
      ↓
Middleware
      ↓
Controller
      ↓
Service
      ↓
Cálculo de Cubagem
      ↓
Resposta JSON
      ↓
Frontend exibe resultado
```

---

# Interface

- Design minimalista
- Layout responsivo
- Bootstrap
- Cards clean
- Tabela dinâmica

---

# Objetivos do Projeto

Este projeto foi desenvolvido com foco em aprendizado de:

- API REST
- Arquitetura MVC
- Middleware
- React
- Integração Frontend e Backend
- Swagger
- Axios
- Estruturação Full Stack

---

# Autor

Desenvolvido por Dan.
