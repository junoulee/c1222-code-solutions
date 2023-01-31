select "inventoryId",
      "filmId",
      "rentalId",
      films.title as title,
      "customerId",
      "firstName",
      "lastName"
from films as films
join inventory using ("filmId")
join rentals using ("inventoryId")
join customers using ("customerId")
where films.title = 'Magic Mallrats';
