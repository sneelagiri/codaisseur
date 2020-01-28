function getGenreStats(storeState) {
  console.log(storeState);

  const albums = [...storeState];

  const genreArray = [];
  const genreObj = {};
  albums.map(album => {
    genreArray.push(album.genre);
  });

  const genresDuplicatesRemoved = genreArray.filter((a, b) => {
    return genreArray.indexOf(a) === b;
  });

  albums.reduce((total, album) => {
    genreObj[album.genre] = 0;
    genresDuplicatesRemoved.map(genre => {
      if (album.genre === genre) {
        genreObj[album.genre]++;
      }
    });
  }, 0);