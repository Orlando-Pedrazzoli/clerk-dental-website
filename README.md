# Centro Dentário Colombo - Website Oficial

Website profissional para o Centro Dentário Colombo com sistema de autenticação integrado via Clerk.

## 🏥 Sobre a Clínica

**Centro Dentário Colombo** é uma moderna clínica dentária localizada no Centro Comercial Colombo, Lisboa.

- **Morada**: Avenida Lusíada, C.C. Colombo - Piso 1, Loja 507, 1500-392 Lisboa
- **Telefone**: +351 21 604 13 55
- **Email**: clinicadentaria.colombo@gmail.com
- **Horário**: Segunda a Domingo, 10:00 - 22:00 (7 dias por semana!)

### Informação Legal
- **Empresa**: D. Amaral Assistência e Prevenção Dentária LDA
- **NIPC**: 505887533
- **Licença ERS**: 3297/2011
- **Registo ERS**: E115139

## 🚀 Características

- ✅ Design moderno e responsivo inspirado em dentistalisboa.com
- ✅ Autenticação de usuários com Clerk
- ✅ Navbar com área do cliente
- ✅ Seções: Hero, Sobre, Serviços, Testemunhos, Contacto
- ✅ Otimizado para mobile
- ✅ Tailwind CSS para estilização
- ✅ React 19 + TypeScript + Vite

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Conta no Clerk (https://clerk.com)

## 🔧 Instalação

1. **Clone ou baixe o projeto**

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure o Clerk:**
   - Crie uma conta em https://clerk.com
   - Crie uma nova aplicação
   - Copie a "Publishable Key"
   - Crie um arquivo `.env` na raiz do projeto:
   ```bash
   cp .env.example .env
   ```
   - Adicione sua chave no arquivo `.env`:
   ```
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_sua_chave_aqui
   ```

4. **Execute o projeto:**
```bash
npm run dev
```

5. **Acesse no navegador:**
```
http://localhost:5173
```

## 📦 Build para Produção

```bash
npm run build
npm run preview
```

## 🎨 Personalização

### Cores e Estilos
- Edite `tailwind.config.js` para personalizar cores
- Modifique `src/index.css` para estilos globais

### Conteúdo
- **Homepage:** `src/pages/home.tsx`
- **Sign In:** `src/pages/sign-in.tsx`

### Informações da Clínica
Edite diretamente em `src/pages/home.tsx`:
- Morada, telefone, email (seção Contacto)
- Serviços oferecidos
- Testemunhos de clientes
- Stats e números

## 🔐 Clerk - Área do Cliente

O botão "Área do Cliente" na navbar redireciona para `/sign-in` onde os pacientes podem:
- Fazer login
- Criar conta
- Acessar área protegida

## 📱 Responsividade

O site está totalmente otimizado para:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🛠 Tecnologias

- **React 19** - Framework UI
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Clerk** - Autenticação
- **React Router** - Navegação

## 📝 Próximos Passos

1. **Área do Cliente**: Criar dashboard protegido para pacientes
2. **Integração**: Adicionar sistema de agendamento
3. **CMS**: Considerar Strapi ou Sanity para gestão de conteúdo
4. **SEO**: Adicionar meta tags e sitemap
5. **Analytics**: Integrar Google Analytics

## 🌐 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Faça upload da pasta dist/
```

## 📄 Licença

Projeto privado - Colombo Clinica Dentária

## 👨‍💻 Desenvolvido por

Orlando Pedrazzoli
