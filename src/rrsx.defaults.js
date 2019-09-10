import React from 'react';
import { setDefaults } from 'react-garden-kit';

const defaults = {
  notFound: {
    default: () => <div>404</div>,
    templates: {
      '404new': () => <div>super 404</div>,
    },
  },
  waitFor: {
    templates: {},
    default: () => (
      <div style={{ position: 'relative', width: '100%', paddingTop: '10px' }}>
        Cargando
      </div>
    ),
  },
  wip: {
    default: () => (
      <div
        style={{
          animation: 'show-no-data .3s',
        }}
      >
        No data
      </div>
    ),
  },
};
setDefaults(defaults);
export { defaults };
