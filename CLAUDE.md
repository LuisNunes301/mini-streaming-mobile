@AGENTS.md
# MiniStreaming Mobile - Roadmap Definitivo

## Objetivo

Transformar o backend MiniStreaming em uma plataforma mobile de streaming semelhante a Netflix/Prime Video, utilizando React Native + Expo + TypeScript.

O objetivo não é criar apenas um CRUD mobile, mas um produto que demonstre:

* Consumo de APIs REST
* Autenticação JWT
* Streaming HLS
* Persistência de sessão
* Continue Watching
* Arquitetura escalável
* UX moderna de streaming

---

# Stack

Frontend:

* React Native
* Expo
* TypeScript
* Axios
* React Navigation
* AsyncStorage
* Expo Video

Backend já existente:

* Spring Boot
* JWT
* PostgreSQL
* RabbitMQ
* MinIO
* FFmpeg
* Docker
* Nginx

---

# Arquitetura Mobile

```text
src
│
├── screens
│   ├── LoginScreen
│   ├── RegisterScreen
│   ├── HomeScreen
│   ├── VideoDetailsScreen
│   ├── VideoPlayerScreen
│   ├── SearchScreen
│   ├── ProfileScreen
│   ├── ContinueWatchingScreen
│   └── DownloadsScreen
│
├── components
│   ├── VideoCard
│   ├── ContinueWatchingCard
│   ├── CategoryRow
│   ├── Avatar
│   └── SearchBar
│
├── navigation
│   ├── AppNavigator
│   ├── AuthNavigator
│   └── TabNavigator
│
├── services
│   ├── api.ts
│   ├── auth.service.ts
│   ├── video.service.ts
│   ├── playback.service.ts
│   └── profile.service.ts
│
├── storage
│   └── tokenStorage.ts
│
├── contexts
│   └── AuthContext.tsx
│
└── types
```

---

# Fluxo de Autenticação

## Login

```text
Email
Senha
↓
POST /auth/login
↓
JWT
↓
Salvar AsyncStorage
↓
Home
```

Endpoint:

```http
POST /auth/login
```

Request:

```json
{
  "email": "user@email.com",
  "password": "123456"
}
```

Response:

```json
{
  "token": "jwt..."
}
```

---

## Registro

Endpoint:

```http
POST /auth/register
```

Request:

```json
{
  "name": "Luis",
  "email": "luis@email.com",
  "password": "123456"
}
```

---

## Persistência de Sessão

Ao abrir o app:

```text
App Start
↓
Existe token?
↓
Sim -> Home
Não -> Login
```

---

# Navegação

## Tabs Principais

```text
🏠 Home

🎬 Assistindo

🔍 Buscar

⬇ Downloads

👤 Perfil
```

---

# Home

Objetivo:

Parecer um aplicativo de streaming real.

Layout:

```text
MiniStreaming                🔍 👤

Continuar Assistindo

[video] [video]

Ação

[video] [video] [video]

Música

[video] [video] [video]

Documentários

[video] [video] [video]
```

---

# Categorias

Inicialmente podem ser simuladas.

Exemplos:

```text
Ação

Drama

Comédia

Música

Documentários

Tecnologia
```

Posteriormente criar suporte real no backend.

---

# Continue Watching

Funcionalidade mais importante.

Backend já possui:

```http
GET /playback/continue
```

Retorna vídeos com progresso salvo.

Exibição:

```text
Continue Assistindo

Beat It
████████░░ 80%

Test Video
████░░░░░░ 40%
```

---

# Video Details

Exibir:

* Título
* Duração
* Resolução
* Status
* Thumbnail
* Botão Assistir

Botão:

```text
Assistir
↓
GET /playback/start/{id}
↓
VideoPlayer
```

---

# Streaming de Vídeo

Endpoint:

```http
GET /playback/start/{contentId}
```

Resposta:

```json
{
  "videoUrl": "http://192.168.0.4/videos/.../master.m3u8",
  "startAt": 67.5
}
```

---

# VideoPlayer

Tecnologia:

```bash
expo-video
```

Objetivos:

* HLS
* Fullscreen
* Resume Playback
* Auto Save Progress

Fluxo:

```text
Abrir vídeo
↓
Receber startAt
↓
Pular para posição salva
↓
Play
```

---

# Salvamento de Progresso

Endpoint:

```http
POST /playback/progress
```

Request:

```json
{
  "contentId": "video-id",
  "currentTime": 120
}
```

Enviar automaticamente:

```text
A cada 10 segundos
```

ou

```text
Ao sair do player
```

---

# Perfil

Primeira versão:

```text
Nome

Email

Logout
```

Versão futura:

```text
Foto

Nickname

Bio

Tempo assistido

Quantidade de vídeos assistidos
```

Endpoints futuros:

```http
GET /profile/me
```

```http
PUT /profile
```

---

# Avatar do Usuário

Objetivo:

Dar sensação de produto real.

Primeiro acesso:

```text
Login
↓
Configurar Perfil
↓
Escolher Avatar
↓
Escolher Nickname
↓
Home
```

Sem múltiplos perfis.

Apenas um perfil por conta.

---

# Busca

Tela:

```text
🔍 Buscar

________________

Beat It
```

Objetivo:

Filtrar vídeos por título.

Backend futuro:

```http
GET /videos?search=beat
```

---

# Downloads

Tab dedicada.

Primeira versão:

```text
Nenhum download
```

Versão futura:

* Expo FileSystem
* Download de conteúdo offline

---

# UI Moderna

## Obrigatório

* Dark Theme
* Cards arredondados
* FlatLists horizontais
* Ícones
* Loading
* Empty States

---

## Header

```text
MiniStreaming
```

Com:

```text
🔍 Pesquisa

👤 Perfil
```

---

## Cards

Exibir:

* Thumbnail
* Título
* Duração
* Status

---

# Tema

Inspirado em:

* Netflix
* Prime Video
* Disney+

Paleta:

```text
Background: #121212

Surface: #1E1E1E

Text: #FFFFFF

Secondary: #B3B3B3
```

---

# Funcionalidades Concluídas

* Login
* Register
* JWT
* AsyncStorage
* Home básica
* Catálogo de vídeos
* Navegação
* Playback API
* Integração com MinIO
* Streaming HLS
* Expo Go funcionando

---

# Próximas Implementações

## Prioridade Máxima

1. Bottom Tabs
2. VideoPlayer funcional
3. Continue Watching
4. Auto Save Progress
5. Home estilo streaming

---

## Prioridade Média

6. Busca
7. Perfil completo
8. Avatar
9. Categorias reais

---

## Futuro

10. Favoritos
11. Downloads Offline
12. Histórico
13. Estatísticas do usuário
14. Recomendações
15. Notificações

---

# Objetivo Final

Construir uma plataforma mobile de streaming capaz de demonstrar:

* React Native
* TypeScript
* JWT
* Consumo de APIs REST
* HLS Streaming
* Persistência de progresso
* Integração com Spring Boot
* PostgreSQL
* RabbitMQ
* MinIO
* Arquitetura orientada a eventos

O resultado final deve parecer uma versão simplificada da Netflix construída sobre uma arquitetura backend moderna.
