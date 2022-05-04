import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'auth/AuthApp';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: (location) => {
        const { pathname } = history.location;
        
        if (pathname !== location.pathname)
          history.push(location.pathname);
      },
      initialPath: history.location.pathname
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
