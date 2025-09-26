# Desafio Técnico Rápido – Node.js

## Contexto

Você precisa implementar uma **API simples de pedidos** para um e-commerce. O foco é avaliar **organização do código, boas práticas e clareza da solução**, não a completude do sistema.

---

## 🎯 Objetivo

Implemente em Node.js (pode usar Express, Fastify ou NestJS) uma API com as seguintes funcionalidades:

1. **Listar produtos disponíveis**
   - Cada produto tem: `id`, `name`, `price` e `stock`.
2. **Criar pedido**
   - Um pedido pode conter vários produtos (com quantidades).
   - O estoque de cada produto deve ser **decrementado** ao confirmar o pedido.
   - Se não houver estoque suficiente, o pedido deve ser rejeitado.
3. **Consultar pedido por ID**
   - Deve retornar os itens e o total do pedido.

---

## 🛠️ Requisitos técnicos

- **Node.js + TypeScript**.
- Banco de dados **em memória** (ex.: arrays ou SQLite in-memory) – não precisa persistir após reiniciar.
- Organização mínima em **camadas** (controllers, services, models).
- Pelo menos **um teste automatizado** (unitário ou de integração).
- Documentação rápida (ex.: instruções no README ou rotas no próprio código).

---

## 📦 Entrega

- Código em um repositório Git público.
- Instruções simples para rodar (`npm install && npm start`).

---

## 🔍 O que será avaliado

1. Clareza e organização do código.
2. Uso correto de async/await.
3. Tratamento de erros e validações.
4. Teste automatizado cobrindo um caso real.
