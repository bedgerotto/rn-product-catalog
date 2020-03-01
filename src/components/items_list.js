import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet
} from 'react-native';

import axios from 'axios';
import Item from './item';

export default class ItemsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentWillMount() {
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then((response) => { this.setState({ items: response.data }); })
      .catch(() => { console.log('Erro ao recuperar os dados'); });
  }

  render() {
    return (
      <ScrollView style={styles.body}>
        { this.state.items.map(item => <Item key={item.titulo} item={item} />) }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#DDD'
  }
});
