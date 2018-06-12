import * as React from 'react';
//import * as ReactDOM from 'react-dom';
import { MovieDetails } from './MovieDetails';
import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { Movie } from 'src/Dto/movie';

configure({ adapter: new Adapter() });
describe("Movie View Component Tests", () => {
    const defaultText = "Please Select A Movie";
    const movie1: Movie = { id: 1, description: "Movie1 description", imageUrl: "www.movie.url", title "Movie1" }

    it("displays message when no movie", () => {
        const mv = shallow(<MovieDetails defaultText={defaultText} />);
        let defaultTextDiv = mv.find(".default-message");
        expect(defaultTextDiv).toBeDefined();
        expect(defaultTextDiv).toHaveLength(1)
        expect(defaultTextDiv.text()).toBe(defaultText);
    });

    it("does not display movie details when no movie", () => {
        const mv = shallow(<MovieDetails defaultText={defaultText} />);
        let defaultTextDiv = mv.find(".movie-details");
        expect(defaultTextDiv).toHaveLength(0);
    });

    it("does not display message when there is a movie", () => {
        const mv = shallow(<MovieDetails defaultText={defaultText} movie={movie1} />);
        let defaultTextDiv = mv.find(".default-message");
        expect(defaultTextDiv).toBeDefined();
        expect(defaultTextDiv).toHaveLength(0)
    })

    it("displays movie details when there is a movie", () => {
        const mv = shallow(<MovieDetails
            defaultText={defaultText} movie={movie1}
        />);

        let img = mv.find("img");
        expect(img).toHaveLength(1);
        expect(img.prop("src")).toEqual(movie1.imageUrl);

        let title = mv.find("label.movie-title");
        expect(title).toHaveLength(1);
        expect(title.text()).toEqual(movie1.title);

        let description = mv.find("p.movie-description");
        expect(description).toHaveLength(1);
        expect(description.text()).toEqual(movie1.description);
    });
}); 