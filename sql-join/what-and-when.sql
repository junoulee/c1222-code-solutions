select "title",
      "filmId",
      "genreId",
      "releaseYear",
      genres.name as genre
from films as films
join "filmGenre" using ("filmId")
join genres as genres using ("genreId")
where films.title = 'Boogie Amelie';
