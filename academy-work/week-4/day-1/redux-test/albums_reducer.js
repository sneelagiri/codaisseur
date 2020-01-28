// albums_reducer.js
const initialState = [];
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ALBUM": {
      // => Ask yourself: what is action.payload?
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
}

function getGenreStats(storeState) {
  console.log(storeState);

  const albums = [...storeState];
  const genreArray = [];
  albums.map(album => {
    genreArray.push(album.genre);
  });

  const genresDuplicatesRemoved = genreArray.filter((a, b) => {
    return genreArray.indexOf(a) === b;
  });

  const genreObj = genresDuplicatesRemoved.reduce(
    (o, key) => Object.assign(o, { [key]: 0 }),
    {}
  );

  albums.reduce((total, album) => {
    genresDuplicatesRemoved.map(genre => {
      if (album.genre === genre) {
        genreObj[album.genre]++;
      }
    });
  }, 0);

  return genreObj;
}

module.exports = { reducer, getGenreStats };
