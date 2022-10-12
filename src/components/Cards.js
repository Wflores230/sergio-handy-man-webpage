import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Services We Supply</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/gutters.jpg'
              text='Repairing damaged gutters'
              label=''
              path='/services'
            />
            <CardItem
              src='images/dry_wall.jpg'
              text='Drywall installation'
              label=''
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src='images/painting.jpg'
                text='Painting'
                label=''
                path='/services'
            />
            <CardItem
              src='images/tiles.jpg'
              text='Laying Tile'
              label=''
              path='/services'
            />
            <CardItem
              src='images/retaining.jpg'
              text='Retaining Walls'
              label=''
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;