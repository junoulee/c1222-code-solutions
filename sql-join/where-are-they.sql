select line1,
      city.name,
      district,
      country.name
from cities as city
join addresses using ("cityId")
join countries as country using ("countryId");
