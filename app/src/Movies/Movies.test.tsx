import * as React from 'react';
import { Movies } from './Movies';
import { configure, shallow, mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { Movie } from 'src/Dto/movie';
import { MovieDetails } from './MovieDetails';

configure({ adapter: new Adapter() });

    const movie1 = { id: 1, description: "Movie1 description", imageUrl: "www.movie1.url", title: "Movie1" };
    const movie2 = { id: 2, description: "Movie2 description", imageUrl: "www.movie2.url", title: "Movie2" };
    const movie3 = { id: 3, description: "Movie3 description", imageUrl: "www.movie3.url", title: "Movie3" };

    const movies: Movie[] = [
        movie1, movie2, movie3
    ] 

    it("displays with no data", () => {
        const moviesComponent = shallow(<Movies movies={null} />);
        let movieContainer = moviesComponent.find("div.movies-component");
        expect(movieContainer).toHaveLength(1);

        expect(movieContainer.find("li")).toHaveLength(0);
    });

    it("displays movies correctly", () => {
        const moviesComponent = mount(<Movies movies={movies} />);
        let movieContainer = moviesComponent.find("div");   
        
        expect(movieContainer.find("li")).toHaveLength(movies.length);

        movies.map((movie, i) => {
            expect(movieContainer.find("li").at(i).text()).toBe(movie.title);
        })
    });
     
    it("initially has no value for selected Movie. Clicking movie title in menu sets state value selectedMovie ", () => {
        const moviesComponent = mount(<Movies movies={movies} />);

        let movieContainer = moviesComponent.find(MovieDetails);  
        expect(movieContainer.props.movie).toBeFalsy();

        moviesComponent.find("li").at(1).simulate("click");
        moviesComponent.update();
        expect(moviesComponent.state().selectedMovie).toBe(movies[1]);         
    });     
