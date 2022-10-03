import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': 'na',
    "birthday": '123',
    'gender': 'ma',
    'job': "aa"
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': 'na',
    "birthday": '123',
    'gender': 'ma',
    'job': "aa"
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': 'na',
    "birthday": '123',
    'gender': 'ma',
    'job': "aa"
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(customer => {
            return (
              <Customer
                key={customer.id}
                id={customer.id}
                image={customer.image}
                name={customer.name}
                birthday={customer.birthday}
                gender={customer.gender}
                job={customer.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
