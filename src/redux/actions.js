export const fetchRepositories = (query) => async dispatch => {
    try {
      const response = await fetch(`https://api.github.com/search/repositories?q=${query}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      dispatch({ type: 'SET_REPOSITORIES', payload: data.items });
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  };
  
  export const toggleFavorite = (repo) => ({
    type: 'TOGGLE_FAVORITE',
    payload: repo,
  });
  