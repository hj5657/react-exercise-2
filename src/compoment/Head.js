import React from 'react';
import '../styles/head.scss';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';

class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="head">
        <div className="headleft">
          <h1>Store</h1>
        </div>
        <div className="headright">
          <span className="badge badge-danger">{this.props.count}</span>
          <svg
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            className="bi bi-cart"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
        </div>
      </div>
    );
  }
}
Head.propTypes = {
  count: PropTypes.number,
};
export default Head;
