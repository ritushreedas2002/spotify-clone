
export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    //token:'BQCJ1EiereL4aWqFW6JvHweIJvQi6chUMxIYoTKj8HEsEDo0HI-kAf9TM1dCQrLFVb1KGEPJwqrhtnsjsS0aKth8mK9zntnRVkf2ZXhuIJaS7bAglNSBnNObeiC2ljIrS-0Bk3SSmEKKXtgBy_gvYN1EpK-h3Mck3LQAvWGNCch1k-VE6ZY-I5koR4Z37PtN0FGokC2R2naIM4bWEREo',
    //remove after finishing
    token:null,
  };



  //action to manipulate how the datalayer looks like
  const reducer = (state, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      case "SET_PLAYING":
        return {
          ...state,
          playing: action.playing,
        };
  
      case "SET_ITEM":
        return {
          ...state,
          item: action.item,
        };
  
      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };
  
      case "SET_TOP_ARTISTS":
        return {
          ...state,
          top_artists: action.top_artists,
        };
  
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
  
      case "SET_SPOTIFY":
        return {
          ...state,
          spotify: action.spotify,
        };
  
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
        default:
          return {...state};
    }
  };
    
      
        
          
        
      
      export default reducer;