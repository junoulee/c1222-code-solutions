
select "actorId",

        "filmId",

        "genreId",
 count ("genreId".*) as "totalMovies",
        name


      from actors
      join "castMembers" using ("actorId")
      join "filmGenre" using ("filmId")
      join genres using ("genreId")

where "firstName" = 'Lisa' and "lastName" = 'Monroe'
group by "genres"."genreId";



    -- -- count(*) as "cityCount"
    -- --  order by "cityCount" desc;
    --   group by "countryId"
