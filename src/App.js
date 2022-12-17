import React, { useEffect} from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import './App.css';
import Login from './Login';
import {getTokenFromUrl} from './spotify';
import Player from './Player';
import {useDataLayerValue} from './DataLayer';

//object that makes sure about the interaction between our react app and spotifyapp...
const spotify = new SpotifyWebApi();

function App() {
  const [{ user,token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getPlaylist("4B4it4MfdOu1eCqDONZD25").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
      
    }
  }, []);

  
    
  return (
    <div className="app">

      {token?<Player spotify={spotify}/>:<Login/>}
      
      </div>
  );
  }

export default App;
