//pattern used in react projects of using index.js
//short cut webpack looks for index.js file if no file specified
//Action Creator
export const selectSong = (song) => {
  //Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

