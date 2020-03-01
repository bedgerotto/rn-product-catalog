import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import ItemsList from './src/components/items_list';

export default class ProductCatalog extends Component {
  render() {
    console.log('aloalo');
    return (
     <ItemsList />
    );
  }
}

AppRegistry.registerComponent('ProductCatalog', () => ProductCatalog);
