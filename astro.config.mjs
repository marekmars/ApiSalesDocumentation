import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Docs with Tailwind',
      defaultLocale: 'en',
      locales: {
        // English docs in `src/content/docs/en/`
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Overview',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Api Overview', link: '/guides/overview/' },
          ],
        },
        {
          label: 'API REST Documentation',
          items: [
            { label: 'Clients Endpoints', link: '/guides/clients/' },
            { label: 'Products Endpoints', link: '/guides/products/' },
            { label: 'Authentication Endpoints', link: '/guides/auth/' },
            { label: 'Users Endpoints', link: '/guides/users/' },
            { label: 'Roles Endpoints', link: '/guides/roles/' },
            { label: 'Sales Endpoints', link: '/guides/sales/' },
          ],
        },
        {
          label: 'Errors Handling',
          items: [
            { label: 'Errors Handling', link: '/guides/error-handling/' },
      
          ],
        },
      ],
      
      customCss: ['./src/tailwind.css'],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
