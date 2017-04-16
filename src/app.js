import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/Hello';

ReactDOM.render(
    <section>
        <Hello name="Tlangelani Mboweni" />
        <Hello />
    </section>,
    document.getElementById('app')
);
