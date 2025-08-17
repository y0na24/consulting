# Услуги - Next.js приложение

Современное веб-приложение, построенное с использованием Next.js 13, TypeScript и Tailwind CSS.

## 🚀 Деплой на Vercel

### Автоматический деплой через GitHub Actions

1. **Настройте секреты в GitHub:**
   - Перейдите в Settings → Secrets and variables → Actions
   - Добавьте следующие секреты:
     - `VERCEL_TOKEN` - токен Vercel (получите в настройках аккаунта)
     - `ORG_ID` - ID организации Vercel
     - `PROJECT_ID` - ID проекта Vercel

2. **При каждом push в main/master ветку** приложение автоматически деплоится на Vercel

### Ручной деплой

1. **Установите Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Войдите в аккаунт Vercel:**
   ```bash
   vercel login
   ```

3. **Деплой:**
   ```bash
   npm run deploy
   ```

### Локальная разработка

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшн версии
npm start
```

## 🛠 Технологии

- **Next.js 13** - React фреймворк
- **TypeScript** - типизированный JavaScript
- **Tailwind CSS** - utility-first CSS фреймворк
- **Radix UI** - доступные React компоненты
- **Vercel** - платформа для деплоя

## 📁 Структура проекта

```
├── app/                 # App Router (Next.js 13)
├── components/          # React компоненты
│   └── ui/            # UI компоненты (shadcn/ui)
├── hooks/              # React хуки
├── lib/                # Утилиты и конфигурация
└── public/             # Статические файлы
```

## 🔧 Конфигурация

- `next.config.js` - конфигурация Next.js
- `vercel.json` - конфигурация Vercel
- `tailwind.config.ts` - конфигурация Tailwind CSS
- `.github/workflows/deploy.yml` - GitHub Actions для автоматического деплоя 