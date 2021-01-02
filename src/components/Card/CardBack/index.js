import React from 'react'
import styles from './CardBack.module.scss'

function CardBack(props) {
// console.log(props);
const cardDescription = props.backData.description;
    return (
        <div className={styles.CardBackBlock}>
            <div className="description">
                {cardDescription.length > 300 ? `${cardDescription.slice(0, 297)}...` : cardDescription}
            </div>
            <a href='https://www.youtube.com/watch?v=7hFivbgIEqk&t=5s&ab_channel=homeproject' className={styles.CardBackBlock__link} target="_blank">See more</a>
        </div>
    );
}


export default CardBack;