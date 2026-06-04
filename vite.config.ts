import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { BOOKS } from './src/books';

function seoBookListPlugin() {
  return {
    name: 'seo-book-list',
    transformIndexHtml(html: string) {
      const items = BOOKS.map(b => {
        const title = b.titles['English'] ?? Object.values(b.titles)[0];
        return `<li>${title} by ${b.author} — ${b.place}, ${b.country}</li>`;
      }).join('');
      const list = `<ul style="position:absolute;left:-9999px;width:1px;overflow:hidden" aria-hidden="true">${items}</ul>`;
      return html.replace('</body>', `${list}\n</body>`);
    },
  };
}

export default defineConfig({
  plugins: [react(), seoBookListPlugin()],
  preview: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT ?? '4173'),
    allowedHosts: 'all',
  },
});
