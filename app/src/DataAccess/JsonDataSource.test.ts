import "../Dto/movie"
import { Movie } from "../Dto/movie";
import { MoviesData } from "../MoviesData";
import { JsonDataSource } from "./JsonDataSource";


it("Error on empty string", () => {
    const movieDataSource = new JsonDataSource<Movie[]>('');

    return movieDataSource.getData().catch(
        e => expect(e).toMatch("Data source not defined")
    );
});

it("Parses empty array",
    () => {

        const movies: Movie[] = [];
        const json = JSON.stringify(movies);
        const movieDataSource = new JsonDataSource<Movie[]>(json);

        return movieDataSource.getData().then(data =>
            expect(data).toEqual(movies)
        )
    }
)

it("Parses one item", () => {
    const movies: Movie[] = [{
        description: "desc",
        id: 1,
        imageUrl: "imgUrl",
        title: "title",
    }];

    const json = JSON.stringify(movies);
    const movieDataSource = new JsonDataSource<Movie[]>(json);
    return movieDataSource.getData().then(data => {
        expect(data).toEqual(movies)
    })
})

it("Parses expected data", () => {
    const json = MoviesData.moviesRaw;
    const rehydrated = JSON.parse(MoviesData.moviesRaw);
    const movieDataSource = new JsonDataSource<Movie[]>(json);

    return movieDataSource.getData().then(data => {
        expect(data).toEqual(rehydrated);
    })
})


// TODO - Write negative tests - eg invalid JSON, etc.
//