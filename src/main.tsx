import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LANGUAGES, LanguageCode } from './data/ministryData';
import { loadLocaleDict } from './i18n';
import './styles/tokens.css';
import './styles/global.css';
import './styles/chrome.css';
import './styles/pages.css';

async function bootstrap() {
  try {
    const saved = localStorage.getItem('egw-lang') as LanguageCode | null;
    if (saved && saved !== 'en' && LANGUAGES.some(l => l.code === saved)) {
      await loadLocaleDict(saved).catch(() => undefined);
    }
  } catch {
    // ignore storage errors
  }

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

void bootstrap();
