const key = '0afbef4ad2bedd1f658898b9192b6f8a'

const requests = {

    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestFrenchComedies:`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_original_language=fr`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;

//https://api.themoviedb.org/3/search/movie?api_key=${key}query=comedy&include_adult=false&language=en-US&page=2
//    requestHorror:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&pquery=horror&page=1&include_adult=true&page=1`,
