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
    public render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="movies-component col-sm-12 col-md-3" >
                        <ul>
                            {this.props.movies && this.props.movies.map(movie =>
                                <li
                                    className={this.state && this.state.selectedMovie === movie ? "selected" : "" }
                                    onClick={this.setMovie(movie)} key={movie.id}>{movie.title}</li>
                            )}
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-9">
                        <MovieDetails movie={this.state && this.state.selectedMovie} />
                    </div>
                </div>
            </div>
        )
    }

    private setMovie(movie: any): (event: React.MouseEvent<HTMLLIElement>) => void {
        return () => {
            this.setState({ selectedMovie: movie });
        };
    }
}