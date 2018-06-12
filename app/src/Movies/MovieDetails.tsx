import * as React from 'react';
import { Movie } from 'src/Dto/movie';
interface MovieDetailsProps {
    movie?: Movie;
    defaultText?: string;
}

export class MovieDetails extends React.Component<MovieDetailsProps> {
    public render() {
        return <div className="movie-view">
            {this.props.movie && <div className="movie-details">
                <div className="title">
                    <img src={this.props.movie.imageUrl} alt="no image" />
                    <label className="movie-title">{this.props.movie.title}</label>
                </div>
                <div className="description">
                    <p className="movie-description">{this.props.movie.description}</p>
                </div>
            </div>}

            {!this.props.movie && <div className="default-message">
                <p>{this.props.defaultText || ""}</p>
            </div>}
        </div>
    }
}