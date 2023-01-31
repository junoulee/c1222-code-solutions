
select "countryId",
countries.name,
      count(*) as "cityCount"
      from cities
      join countries using ("countryId")
      group by "countryId"
     order by "cityCount" desc;
