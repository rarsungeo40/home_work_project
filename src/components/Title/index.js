import React from 'react'
import styles from './Title.module.scss'


class Title extends React.Component {

  render() {
    console.log(this);

    const {title, size} = this.props;
    return (
      <>
      <h1 className={styles.h1}>
        First heading H1
      </h1> 
      <h2 className={styles.h2}>
        First heading H2
      </h2> 
      <h3 className={styles.h3}>
          First heading H3
        </h3> 
        <h4 className={styles.h4}>
        First heading H4
      </h4> 
    </>
    );
  }

}


export default Title;

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