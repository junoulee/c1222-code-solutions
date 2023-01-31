select "firstName",
      "lastName",
      "filmId",
      "actorId",
      films.title
from actors
join "castMembers" using ("actorId")
join films using ("filmId")
where films.title = 'Jersey Sassy';
