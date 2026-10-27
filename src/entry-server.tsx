import React, { type ComponentType } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, useRoutes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { buildRoutes } from './routes';
import { getPrerenderPaths } from './prerenderPaths';

const modules = import.meta.glob<{ default: ComponentType }>('./pages/*.tsx', { eager: true });
const routes = buildRoutes((name) => modules[`./pages/${name}.tsx`].default);

function AppRoutes() {
  return useRoutes(routes);
}

export { getPrerenderPaths };

export function render(url: string) {
  const helmetContext: { helmet?: any } = {};

  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  );

  return { html, helmet: helmetContext.helmet };
}
