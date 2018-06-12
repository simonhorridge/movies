import "../Dto/movie"
import { Movie } from "../Dto/movie";
import { MoviesData } from "../MoviesData";
import {JsonDataSource} from "./JsonDataSource";

let movieDataSource : JsonDataSource<Movie[]>;
beforeEach(() => {
    movieDataSource = new  JsonDataSource<Movie[]>();
});

it("Error on empty string", ()=> {
    return   movieDataSource.getData('').catch(
        e => expect(e).toMatch("Data source not defined")
    );
});

it ("Parses empty array" , 
    ()=> {

        const movies: Movie[] = [];
        const json = JSON.stringify(movies);
    
       return  movieDataSource.getData(json).then(data => 
            expect(data).toEqual(movies)
        )
    }
)

it("Parses one item", ()=> {
    const movies: Movie[] = [{
        description: "desc",
        id:1,
        imageUrl: "imgUrl",
        title: "title",
    }];
    const json = JSON.stringify(movies);
    return  movieDataSource.getData(json).then(data => {
        expect(data).toEqual(movies)
    }) 
})

it ("Parses expected data", ()=> {
    const json = MoviesData.moviesRaw;
    const rehydrated  = JSON.parse(MoviesData.moviesRaw);
    return  movieDataSource.getData(json).then(data => {
        expect(data).toEqual(rehydrated);
    }) 
})


// TODO - Write negative tests - eg invalid JSON, etc.
//