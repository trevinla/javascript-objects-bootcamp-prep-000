var playlist = new Object({artistName: 'songTitle'});

function updatePlaylist(artistName, songTitle) {
var playlist = ({artistName: songTitle});
return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist
}
