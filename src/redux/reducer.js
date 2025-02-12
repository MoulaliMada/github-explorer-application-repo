const initialState = {
    repositories: [],
    favorites: [],
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_REPOSITORIES':
        return { ...state, repositories: action.payload };
      case 'TOGGLE_FAVORITE':
        return {
          ...state,
          favorites: state.favorites.some(repo => repo.id === action.payload.id)
            ? state.favorites.filter(repo => repo.id !== action.payload.id)
            : [...state.favorites, action.payload],
        };
      default:
        return state;
    }
  }
  