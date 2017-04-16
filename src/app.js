import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/Hello';

ReactDOM.render(
    <section>
        <Hello name="Tlangelani Mboweni" age={2017 - 1985}/>
        <Hello age={2017 - 1980} />
    </section>,
    document.getElementById('app')
);
