import { makeExecutableSchema } from "graphql-tools";
import http from "request-promise-json";
const MOVIE_DB_API_KEY = process.env.MOVIE_DB_API_KEY;
const typeDefs = `
  type Query {
    movies: [Movie]
    movie(id: ID, imdb_id: String): Movie
    ratedMovies: [Movie]
  }
  type Movie {
    id: ID!
    imdb_id: String!
    budget: Float
    title: String
    release_date: String
    production_companies: [production_companies]
    rating: Int
  }
  type production_companies {
    id: ID!
    logo_path: String
    name: String
    origin_country: String
  }
  type Mutation {
  rateMovie(id: ID!, rating: Int!): Int
  }
`;
const resolvers = {
  Query: {
    movie: async (obj, args, context, info) => {
      if (args.id) {
        return http.get(
          `https://api.themoviedb.org/3/movie/${args.id}?api_key=${MOVIE_DB_API_KEY}&language=en-US`
        );
      }
      if (args.imdb_id) {
        const results = await http.get(
          `https://api.themoviedb.org/3/find/${args.imdb_id}?api_key=${MOVIE_DB_API_KEY}&language=en-US&external_source=imdb_id`
        );
        if (results.movie_results.length > 0) {
          const movieId = results.movie_results[0].id;
          return http.get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${MOVIE_DB_API_KEY}&language=en-US`
          );
        }
      }
    },
    movies: async (obj, args, context, info) => {
      const movies = await http.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${MOVIE_DB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      );
      return movies.results;
    },
    ratedMovies: async (obj, args, context, info) => {
      const guest_session = await getSessionId();
      const ratedMoviesUrl = `https://api.themoviedb.org/3/guest_session/${guest_session}/rated/movies?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
      const movies = await http.get(ratedMoviesUrl);
      console.log(movies);
      return movies.results;
    }
  },
  Mutation: {
    rateMovie: async (obj, args, context, info) => {
      const guest_session = await getSessionId();
      return await http
        .post(
          `https://api.themoviedb.org/3/movie/${args.id}/rating?api_key=${MOVIE_DB_API_KEY}&guest_session_id=${guest_session}&language=en-US`,
          { value: args.rating }
        )
        .then(() => args.rating);
    }
  }
};
let guestSessionObj;
async function getSessionId() {
  guestSessionObj =
    guestSessionObj ||
    (await http.get(
      `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${MOVIE_DB_API_KEY}&language=en-US`
    ));
  return guestSessionObj["guest_session_id"];
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
export default schema;
