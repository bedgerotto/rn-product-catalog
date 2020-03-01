import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

export default class Item extends Component {
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: this.props.item.foto }} />
        </View>
        <View style={styles.itemDetails}>
          <Text style={styles.title}>{ this.props.item.titulo }</Text>
          <Text style={styles.value}>R$ { this.props.item.valor }</Text>
          <Text style={styles.textDetails}>Local: { this.props.item.local_anuncio }</Text>
          <Text style={styles.textDetails}>Publicação { this.props.item.data_publicacao }</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row'
  },
  imageContainer: {
    width: 102,
    height: 102
  },
  image: {
    height: 100,
    width: 100
  },
  itemDetails: {
    marginLeft: 20,
    flex: 1
  },
  title: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  textDetails: {
    fontSize: 16
  }
})
