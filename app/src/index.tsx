import App from './App';
import { JsonDataSource } from 'src/DataAccess/JsonDataSource';
import { Movie } from 'src/Dto/movie';
import { MoviesData } from 'src/MoviesData';
import registerServiceWorker from './registerServiceWorker';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
    <App moviesData={new JsonDataSource<Movie[]>(MoviesData.moviesRaw)}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
