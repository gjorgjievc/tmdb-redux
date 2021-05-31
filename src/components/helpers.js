export const listGenres = (genres) => {
    const genreNames = genres.map(genre => genre.name);
    return genreNames.join(', ');
  };

export const movieDuration = (time) => {
  const hour = Math.floor(time / 60);
  const min = time % 60;
  return hour + "h" + min + "min"
}

