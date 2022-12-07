import React, { useEffect} from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import './App.css';
import Login from './Login';
import {getTokenFromUrl} from './spotify';
import Player from './Player';
import {useDataLayerValue} from './DataLayer';

//object that makes sure about the interaction between our react app and spotifyapp...
const spotify = new SpotifyWebApi();

const App = () => {
  console.log(spotify);
    //BEM CONVENTION
    
    
    const [{ user,token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

  
    if (_token) {

      dispatch({
        type:'SET_TOKEN',
        token:_token,
      })

      
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        
        dispatch({
          type:'SET_USER',
          user:user,
        })
      });
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:'SET_PLAYLISTS',
          playlists:playlists,
        });
      });
    }
      /*dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      /*spotify.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
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
      );*/

      /*dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });*/

      /*spotify.getMe().then((user) => {
        console.log(user);
        dispatch({
          type: "SET_USER",
          user:user,
        });
      });*/
    
      /*spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists:playlists,
        });
      });*/
    

  }, []);

  
    
  return (
    <div className="app">
      <h1></h1>
      {/*<Login/><Player spotify={spotify}/>*/}
       {/* {token?<Player spotify={spotify}/>:</Login>} */}
        
        

    </div>
  );
}

export default App;
