import React from 'react';
import { render } from 'react-dom';
import Game from './Game';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

render(<Game />, document.getElementById('root'));
registerServiceWorker();
