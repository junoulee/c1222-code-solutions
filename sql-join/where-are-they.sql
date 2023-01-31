select line1,
      city.name as city,
      district,
      country.name as country
from cities as city
join addresses using ("cityId")
join countries as country using ("countryId");
