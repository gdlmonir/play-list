import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Aaj ai dintake', duration: '4:05' },
    { title: 'Amar sopno tumi ogo', duration: '2:30' },
    { title: 'Ami chini go chini tomare', duration: '3:15' },
    { title: 'Purano sei diner kotha', duration: '1:45' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
