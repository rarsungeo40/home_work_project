import React from 'react'
import styles from './ItemHouse.module.scss'


class ItemHouse extends React.Component {

  constructor() {

    super();

    this.state = {
      showDes: false,
      liked: false,
    }

  }

  showHideDesc = function () {
    this.setState({
      showDes: !this.state.showDes,
    })
  }

  likeThis = function () {
    this.setState(
      { liked: !this.state.liked, }
    )
  }


  render() {
    // console.log(this);
    // console.log(this.props);
      // console.log(this.state, this.state.showDes);
      // console.log(this.showHideDesc)

    const { houseData: {title, buttonText, price, imageSrc, addClass, description} } = this.props;
    return (
      <div className={styles.houseItem + ' col-12 col-md-6 m-0'}>
          <img src={imageSrc} alt="house1.png" className={styles.houseItem__picture}/>
          <h3 className = "title">{title}</h3>
          <p>Prise: <b>{price}</b></p>
          <button className={"btn btn-secondary dropdown-toggle" + styles.houseItem__activ_btn} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {buttonText}
          </button>
            
            <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
              <button type='button' onClick={() => {
                this.showHideDesc();
              }}>
                { this.state.showDes ? 'Hide' : 'Show'} description
              </button>

              <button className={this.state.liked ? styles.houseItem__liked : styles.houseItem__to_like } onClick={()=> {this.likeThis()}}>
                { this.state.liked ? 'Remove' : 'Save' }
              </button>
            </div>
            { this.state.showDes ?
            <p className="description">{description}</p> : null
            }
          
      </div>
    );
  }

}


export default ItemHouse;

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