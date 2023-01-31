select line1,
      city.name as city,
      district
from cities as city
join addresses using ("cityId");
