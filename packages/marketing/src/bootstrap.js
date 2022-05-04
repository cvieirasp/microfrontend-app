import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

const mount = (element, { onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });
  
  if (onNavigate)
    history.listen(onNavigate);
  
  ReactDOM.render(<App history={history} />, element);

  return {
    onParentNavigate(location) {
      const { pathname } = history.location;
      
      if (pathname !== location.pathname)
        history.push(location.pathname);
    },
  }
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
