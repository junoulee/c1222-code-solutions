
select
payments."customerId",
   payments."rentalId",


        amount,
        sum(amount) as "totalSpent"



      from payments

      join rentals using ("rentalId")

         order by "totalSpent" desc;
