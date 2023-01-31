select amount,
      "firstName",
      "lastName"
from payments
join customers using ("customerId")
order by amount DESC
limit 10;
