import {
    FETCH_GAMES_REQUEST,
    FETCH_GAMES_SUCCESS,
    FETCH_GAMES_FAILURE,
    FETCH_GAME_DETAILS_REQUEST,
    FETCH_GAME_DETAILS_SUCCESS,
    FETCH_GAME_DETAILS_FAILURE,
    SET_PLATFORM_FILTER,
    SET_GENRE_FILTER,
    SET_SORT_BY,
    SET_SEARCH,
    SET_PAGE
  } from './actions';
  
  const initialState = {
    games: [],
    gameDetails: null,
    loading: false,
    error: null,
    platformFilter: '',
    genreFilter: '',
    sortBy: 'name',
    search: '',
    page: 1,
    totalPages: 1,
  };
  
  function gameReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_GAMES_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_GAMES_SUCCESS:
        return { ...state, loading: false, games: action.payload.games, totalPages:action.payload.totalPages };
      case FETCH_GAMES_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case FETCH_GAME_DETAILS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_GAME_DETAILS_SUCCESS:
        return { ...state, loading: false, gameDetails: action.payload };
      case FETCH_GAME_DETAILS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case SET_PLATFORM_FILTER:
        return { ...state, platformFilter: action.payload, page: 1 };
      case SET_GENRE_FILTER:
        return { ...state, genreFilter: action.payload, page: 1 };
      case SET_SORT_BY:
        return { ...state, sortBy: action.payload, page: 1 };
      case SET_SEARCH:
          return {...state, search: action.payload, page: 1};
      case SET_PAGE:
          return {...state, page: action.payload};
      default:
        return state;
    }
  }
  
  export default gameReducer;