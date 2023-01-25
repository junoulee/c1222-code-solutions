let counter = 3;

function countDown() {
  if (counter <= 0) {

    console.log('Blast off!');
    clearInterval(timer);

  } else {
    console.log(counter);
  }
  counter = counter - 1;

}

const timer = setInterval(countDown, 1000);
