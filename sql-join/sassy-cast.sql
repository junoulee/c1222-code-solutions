select "firstName",
      "lastName",
      "filmId",
      "actorId",
      films.title as title
from actors
join "castMembers" using ("actorId")
join films as films using ("filmId")
where films.title = 'Jersey Sassy';
