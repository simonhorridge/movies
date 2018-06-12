import * as React from 'react';
import { Movie } from 'src/Dto/movie';
import { MovieDetails } from './MovieDetails';

interface MoviesProps {
    movies: Movie[]
}

interface MoviesState {
    selectedMovie: Movie;
}

export class Movies extends React.Component<MoviesProps, MoviesState> {
    render() {
        return <div className="movies">
            <ul onClick={() => {
                this.setState({ selectedMovie: this.props.movies[1] })
            }}>
                {this.props.movies && this.props.movies.map(movie =>
                    <li onClick={() => {
                        this.setState({ selectedMovie: movie })
                    }} key={movie.id}>{movie.title}</li>
                )}
            </ul>

            <MovieDetails movie={this.state && this.state.selectedMovie} />
        </div>
    }
}