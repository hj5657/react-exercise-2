import React from 'react';
import URL from '../assets/product_image_placeholder.png';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/goods.scss';
import PropTypes from 'prop-types';

class Goods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="goods">
        <div className="goodsName">
          <p>{this.props.name}</p>
        </div>
        <div className="goodsImg">
          <img src={URL} alt="goodsImg" />
        </div>
        <div className="goodsBottom">
          <span>{this.props.price}</span>
          <button
            type="button"
            className="btn btn-success"
            style={{ float: 'right' }}
            onClick={() => this.props.handleIncrement()}
          >
            add to cart
          </button>
        </div>
      </div>
    );
  }
}
Goods.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  handleIncrement: PropTypes.func,
};
export default Goods;
