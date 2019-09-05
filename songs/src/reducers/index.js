import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'You Say', duration: '4:40'},
    { title: 'So Will I', duration: '7:30'},
    { title: 'Fear No More', duration: '3:14'},
    { title: 'Let It Rain', duration: '3:29'}
  ]
};

//if statement used just in case app is expanded
const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type ==='SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers ({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
