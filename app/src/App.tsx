import * as React from 'react';
import './App.css';
import { DataSource } from './DataAccess/DataSource';
import { Movie } from './Dto/movie';
import { Movies } from './Movies/Movies';

interface AppProps {
    moviesData: DataSource<Movie[]>
}

interface AppState {
    movies: Movie[]
}

class App extends React.Component<AppProps, AppState>{

    public componentDidMount() {
        this.props.moviesData.getData().then((movies: Movie[]) => {
            this.setState({ movies });
        });
    }

    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Movie night!!!</h1>
                    <h2 className="App-title">Select a title from the list below to see more details</h2>
                </header>

                <Movies movies={this.state && this.state.movies} />

            </div>
        );
    }
}

export default App;
