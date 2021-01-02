import React from 'react';
import styles from './Card.module.scss';
// import House from '../ItemHouse/index';
import CardBack from "./CardBack";
import CardFront from "./CardFront";

class Card extends React.Component {

    constructor() {

        super();
    
        this.state = {
          isBack: false,
        }
    
      }
    
      cardRot = function () {
        this.setState({
            isBack: !this.state.isBack,
        })
      }


    render() {
      // console.log(this);
  
    //   const { houseData: {title, buttonText, price, imageSrc, addClass, description} } = this.props;


      const data = this.props.text;
      // console.log(data);
      const front = {
        title: data.title,
        price: data.price,
        imageSrc: data.imageSrc,
      };
      const back = {
        description: data.description
      };
      const cardClass = [styles.card];
      const {isBack} = this.state;
      if (isBack) { cardClass.push(styles.isBack) }
      return (
        
            <div className={ cardClass.join(' ') } onClick={() => this.cardRot()}>
                <div className={styles.card__Inner}>
                {/* {
                    this.state.isBack ? <div className={styles.card__back}>{back}</div>:
                    <div className={styles.card__front}>{front}</div> 
                } */}
                <div className={styles.card__back}>
                   <CardBack backData={back}/>
                </div>

                <div className={styles.card__front}>
                    <CardFront frontData={front}/>
                </div> 



                </div>
                
                {/* <button type='button' onClick={() => this.cardRot()}>Rotare</button> */}
                
                
            
            <button className={styles.card__but} onClick={ () => {
                // console.log(this);
                this.setState((_state, _props) => {
                  return {
                    counter:  this.props.deleteItem(this.props.text)
                  };
                });
              }
                }>Delete</button>
            </div>
        
      );
    }
  
}


export default Card;