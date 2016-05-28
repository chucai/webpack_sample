require('./index.css');

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './components/HelloWorld';

render(<HelloWorld />, document.getElementById('hello-world-application'));
