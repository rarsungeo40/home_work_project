import React from 'react'
import styles from './ItemHomes.module.scss'
import ItemHouse from '../ItemHouse/index';
// import 'bootstrap/dist/css/bootstrap.min.css';

const houses = [
  {
    title: "Home 1",
    buttonText: "By",
    price: 1000000,
    imageSrc: 'https://cf.bstatic.com/images/hotel/max1024x768/135/135321167.jpg',
    description: 'TEXT1. sfdh efd boidjsf bdf gsdfjj sdfjhsd ;lnjdfg lkjdgfjnkdjgfh jnofdg oigih ufgiohu oifgu noifoin oib',
  },

  {
    title: "Home 122",
    buttonText: "Rent",
    price: 10000,
    imageSrc: 'https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero.jpg',
    addClass: 'col-12 col-md-6 m-0',
    description: 'TEXT2. sfdh efd boidjsf bdf gsdfjj sdfjhsd ;lnjdfg lkjdgfjnkdjgfh jnofdg oigih ufgiohu oifgu noifoin oib',
  }
];

class ItemHomes extends React.Component {

  render() {
    console.log(this);

    const {title, buttonText, price, imageSrc} = this.props;
    return (
      <div className={styles.homes + ' row'}>
        <ItemHouse houseData={houses[0]} /> 
        <ItemHouse houseData={houses[1]} />
      
      </div>
    );
  }

}


export default ItemHomes;

// eslint-disable-next-line
{/* function ItemHouse({title, buttonText, price, imageSrc}) {
    return (
      <div className={styles.houseItem}>
          <img src={imageSrc} alt="house1.png" className={styles.houseItem__picture}/>
          <h3 className = "title">{title}</h3>
          <p className="description">TEXTsfdh efd boidjsf bdf gsdfjj sdfjhsd ;lnjdfg lkjdgfjnkdjgfh jnofdg oigih ufgiohu oifgu noifoin oib </p>
          <p>Prise: <b>{price}</b></p>
          <button>{buttonText}</button>
      </div>
    );
  }
*/}