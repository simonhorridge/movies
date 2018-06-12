import { configure, mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import { DataSource } from 'src/DataAccess/DataSource';
import { Movie } from 'src/Dto/movie';
import App from './App';

configure({ adapter: new Adapter() });

it('displays when datasource returns no movies', async () => {

    const movies: Movie[] = [

    ]

    const movieDataSource: DataSource<Movie[]> = {
        getData: () => {
            return new Promise<Movie[]>((resolve, error) => {
                resolve(movies);
            });
        }
    }

    const div = document.createElement('div');
    const component = mount(<App moviesData={movieDataSource} />, div);
    await component.instance().componentDidMount()
    expect(component.state().movies).toBe(movies);
});

it('displays list of movies', async () => {
    const movie1 = { id: 1, description: "Movie1 description", imageUrl: "www.movie1.url", title: "Movie1" };
    const movie2 = { id: 2, description: "Movie2 description", imageUrl: "www.movie2.url", title: "Movie2" };
    const movie3 = { id: 3, description: "Movie3 description", imageUrl: "www.movie3.url", title: "Movie3" };

    const movies: Movie[] = [
        movie1, movie2, movie3
    ]

    const movieDataSource: DataSource<Movie[]> = {
        getData: () => {
            return new Promise<Movie[]>((resolve, error) => {
                resolve(movies);
            });
        }
    }

    const div = document.createElement('div');
    const component = mount(<App moviesData={movieDataSource} />, div);
    await component.instance().componentDidMount()
    expect(component.state().movies).toBe(movies);
});

    // todo - what if datasource is null/ undefined?
