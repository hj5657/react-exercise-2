import React, { Component } from 'react';
import './App.scss';
import './compoment/Head';
import 'bootstrap/dist/css/bootstrap.css';
import Head from './compoment/Head';
import Goods from './compoment/Goods';

const url = 'http://localhost:3000/products';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      goods: [
        {
          name: '',
          price: '',
        },
      ],
    };
  }
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <main className="app">
        <Head count={this.state.count} />
        <h3 style={{ marginLeft: 20 }}>iPhone</h3>
        {this.state.goods.map((item, index) => {
          if (index === 3) {
            return (
              <div>
                <h2 style={{ marginLeft: 20 }}>HUAWEI</h2>
                <Goods
                  handleIncrement={this.handleIncrement}
                  name={item.name}
                  price={item.price}
                />
              </div>
            );
          }
          return (
            <Goods
              handleIncrement={this.handleIncrement}
              name={item.name}
              price={item.price}
              key={item.id}
            />
          );
        })}
      </main>
    );
  }
  receiveProducts = (reception) => {
    this.setState({
      goods: reception,
    });
  };
  componentDidMount = async () => {
    try {
      const response = await fetch(url);
      const reception = await response.json();
      this.receiveProducts(reception);
    } catch (e) {
      console.error(e);
    }
  };
}

export default App;
