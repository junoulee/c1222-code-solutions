import React from 'react';
import ReactDOM from 'react-dom/client';
import { Carousel } from './carousel';

const babyAnimals = [
  {
    id: 1,
    image: 'https://tractive.com/blog/wp-content/uploads/2016/04/puppy-care-guide-for-new-parents.jpg',
  },

  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',

  },

  {
    id: 3,
    image: 'https://www.gannett-cdn.com/-mm-/c70f0559cac51a18a6cbfd5ebb2b197c4f3e4a96/c=0-177-3991-2432/local/-/media/2017/12/18/USATODAY/USATODAY/636491998776301733-AP-APTOPIX-Japan-Panda.jpg?width=1200',

  },
  {
    id: 4,
    image: 'https://a-z-animals.com/media/2021/10/slumbering-little-tiger-picture-id472298390.jpg',
  },
  {
    id: 5,
    image: 'https://a-z-animals.com/media/2021/11/newborn-piglet-on-spring-green-grass-on-a-farm-picture-id956025942-1024x535.jpg',
  },
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Carousel images={babyAnimals} />);
