import React from 'react'
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

export default function Review() {
  const [index,setIndex] = useState(0);
    const reviews = [
        {
          id: 1,
          name: 'susan smith',
          job: 'web developer',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
          text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        },
        {
          id: 2,
          name: 'anna johnson',
          job: 'web designer',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
          text:
            'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        },
        {
          id: 3,
          name: 'peter jones',
          job: 'intern',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
          text:
            'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        },
        {
          id: 4,
          name: 'bill anderson',
          job: 'the boss',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
          text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
        },
      ];
      const {name,job,image,text}=reviews[index];
  const checkNumber=(number)=>{
    if(number>reviews.legth-1){
      return 0;
    }
    if(number<0){
      return reviews.length-1;
    }
    return number;
  };
  const nextPerson=()=>{
    setIndex((index)=>{
      let newIndex=index+1;
      return checkNumber(newIndex);
    })
  }
  const prevPerson=()=>{
    setIndex((index)=>{
      let newIndex=index-1;
      return checkNumber(newIndex);
    })
  }
  const randomPerson=()=>{
    let randonNumber=Math.floor(Math.random()*reviews.length);
    if(randonNumber===index){
        randonNumber=index+1;
    }
    setIndex(checkNumber(randonNumber));
  };

  return (
    <div className='review'>
      <div className='image-container'>
        <img src={image} alt="image" className='img' />
      </div>
      <h3 className='name'>{name}</h3>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-main'>
          <button className='button-1' onClick={prevPerson}><FaChevronLeft /></button>
          <button className='button-2' onClick={nextPerson}><FaChevronRight /></button>
      </div>
      <div className='button-main'>
          <button className='button-3' onClick={randomPerson}>surprise me</button>
      </div>
      
    </div>
  )
}
