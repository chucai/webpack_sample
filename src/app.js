import 'babel-polyfill';
import cats from './cats';
import $ from 'jquery';
require('./app.css');
//import './app.css'; // 效果跟require一样

$("<h1>Catas</h1>").appendTo('body');
const ul = $('<ul></ul>').appendTo('body');
for (const cat of cats) {
  $('<li></li>').text(cat).appendTo(ul);
}

