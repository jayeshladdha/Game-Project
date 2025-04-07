import axios from 'axios';

const API_KEY = process.env.REACT_APP_RAWG_API_KEY;
const BASE_URL = 'https://api.rawg.io/api/games';

export const FETCH_GAMES_REQUEST = 'FETCH_GAMES_REQUEST';
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_FAILURE = 'FETCH_GAMES_FAILURE';
export const FETCH_GAME_DETAILS_REQUEST = 'FETCH_GAME_DETAILS_REQUEST';
export const FETCH_GAME_DETAILS_SUCCESS = 'FETCH_GAME_DETAILS_SUCCESS';
export const FETCH_GAME_DETAILS_FAILURE = 'FETCH_GAME_DETAILS_FAILURE';
export const SET_PLATFORM_FILTER = 'SET_PLATFORM_FILTER';
export const SET_GENRE_FILTER = 'SET_GENRE_FILTER';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_PAGE = 'SET_PAGE';

export const fetchGamesRequest = () => ({ type: FETCH_GAMES_REQUEST });
export const fetchGamesSuccess = (games, totalPages) => ({ type: FETCH_GAMES_SUCCESS, payload: { games, totalPages } });
export const fetchGamesFailure = (error) => ({ type: FETCH_GAMES_FAILURE, payload: error });
export const fetchGameDetailsRequest = () => ({ type: FETCH_GAME_DETAILS_REQUEST });
export const fetchGameDetailsSuccess = (gameDetails) => ({ type: FETCH_GAME_DETAILS_SUCCESS, payload: gameDetails });
export const fetchGameDetailsFailure = (error) => ({ type: FETCH_GAME_DETAILS_FAILURE, payload: error });
export const setPlatformFilter = (platform) => ({ type: SET_PLATFORM_FILTER, payload: platform });
export const setGenreFilter = (genre) => ({ type: SET_GENRE_FILTER, payload: genre });
export const setSortBy = (sortBy) => ({ type: SET_SORT_BY, payload: sortBy });

export const fetchGames = (platform, genre, sortBy, search, page) => {
  return async (dispatch) => {
    dispatch(fetchGamesRequest());
    try {
      const params = {
        key: API_KEY,
        platforms: platform,
        genres: genre,
        ordering: sortBy,
        search: search,
        page: page,
      };
      const response = await axios.get(BASE_URL, { params });
      dispatch(fetchGamesSuccess(response.data.results, Math.ceil(response.data.count/20)));
    } catch (error) {
      dispatch(fetchGamesFailure(error.message));
    }
  };
};

export const fetchGameDetails = (id) => {
  return async (dispatch) => {
    dispatch(fetchGameDetailsRequest());
    try {
      const response = await axios.get(`${BASE_URL}/${id}?key=${API_KEY}`);
      dispatch(fetchGameDetailsSuccess(response.data));
    } catch (error) {
      dispatch(fetchGameDetailsFailure(error.message));
    }
  };
};
