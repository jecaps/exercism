/*
Instructions
Ozan is putting together a playlist for an upcoming roadtrip. He doesn't want to hear the same track more than once, but the playlist has gotten so long 
that he's having trouble remembering which tracks have already been added.

The API for Ozan's music player only knows how to work with arrays, so he attempts to write some code that uses Array.indexOf() to check for the presence 
of a track before adding it to the playlist. Unfortunately, his program takes much too long to execute. He needs your help!

Coming to Ozan's aid, you are astonished to find that his playlist contains half a million tracks. Perhaps you know of a different data structure that will 
allow you to manipulate the playlist more efficiently?
*/

/*
Task 1 Remove duplicate tracks

Implement the removeDuplicates function, which takes a playlist as a parameter and returns a new playlist where all the tracks are unique.
*/
function removeDuplicates(playlist) {
  return (playlist = [...new Set(playlist)]);
}

/*
Task 2 Check whether a track has already been added

Implement the hasTrack function, which takes a playlist and a track as parameters and returns a boolean that indicates whether the playlist contains 
the track.
*/
function hasTrack(playlist, track) {
  return playlist.includes(track);
}

/*
Task 3 Add a track

Implement the addTrack function, which takes a playlist and a track as parameters and returns a new playlist that includes the track.
*/
function addTrack(playlist, track) {
  playlist.push(track);
  return removeDuplicates(playlist);
}

/*
Task 4 Delete a track

Implement the deleteTrack function, which takes a playlist and a track as parameters and returns a new playlist that does not include the track.
*/
function deleteTrack(playlist, track) {
  return playlist.filter((song) => song !== track);
}

/*
Task 5 List unique artists

Implement the listArtists function, which takes a playlist as a parameter and returns the list of unique artists in the playlist. Note that the names 
of the tracks are formatted like <SONG> - <ARTIST>.
*/
function listArtists(playlist) {
  return removeDuplicates(playlist.map((track) => track.split(" - ")[1]));
}
