import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Movies } from './Movies';
import { configure, shallow, mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { Movie } from 'src/Dto/movie';
import { DataSource } from 'src/DataAccess/DataSource';
import { MovieDetails } from './MovieDetails';

configure({ adapter: new Adapter() });
describe("Movies Component tests", () => {
    const movie1 = { id: 1, description: "Movie1 description", imageUrl: "www.movie1.url", title: "Movie1" };
    const movie2 = { id: 2, description: "Movie2 description", imageUrl: "www.movie2.url", title: "Movie2" };
    const movie3 = { id: 3, description: "Movie3 description", imageUrl: "www.movie3.url", title: "Movie3" };

    const movies: Movie[] = [
        movie1, movie2, movie3
    ]

    //const movieDataSource: DataSource<Movie[]> = {
    //    getData: () => {
    //        return new Promise <Movie[]>((resolve, error) => {
    //            resolve(moviesData);
    //        });
    //    }
    //}

    it("displays with no data", () => {
        const comp = shallow(<Movies movies={null} />);
        let movieContainer = comp.find("div");
        expect(movieContainer).toHaveLength(1);

        expect(movieContainer.find("li")).toHaveLength(0);
    });

    it("displays movies correctly", () => {
        const comp = mount(<Movies movies={movies} />);
        let movieContainer = comp.find("div");   
        
        expect(movieContainer.find("li")).toHaveLength(movies.length);

        movies.map((movie, i) => {
            console.log("testing movie component item: ", movie.title);
            expect(movieContainer.find("li").at(i).text()).toBe(movie.title);
        })
    });
     
    it("initially has no value for selected Movie. Clicking movie title in menu sets state value selectedMovie ", () => {
        const comp = mount(<Movies movies={movies} />);

        let movieContainer = comp.find(MovieDetails);  
        expect(movieContainer.props.movie).toBeFalsy();

        comp.find("li").at(1).simulate("click");
        comp.update();

        console.log("movieContainer.props", movieContainer.props())
        expect(comp.state().selectedMovie).toBe(movies[1]);         
    });

    // TODO - Write negative tests - eg invalid/ no data source, etc.

});