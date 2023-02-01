-- List the genres of movies (and how many) that 'Lisa Monroe' appeared in.
-- She appeared in a lot of films!
-- Hint: Your result set should include 3 Sports films and 2 Sci-Fi films, plus a lot more!

select name,
      count("filmGenre"."genreId") as "count"
      from genres
      join "filmGenre" using ("genreId")
      join "castMembers" using ("filmId")
      join actors using ("actorId")
      where actors."firstName" = 'Lisa' and actors."lastName" = 'Monroe'
      group by genres.name;
