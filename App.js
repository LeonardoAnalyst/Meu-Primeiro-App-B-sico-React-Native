import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { bold } from 'ansi-colors';

class Botao extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.styles = StyleSheet.create({
      botao: {
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: props.cor,
        borderRadius: 25,
      },
      btnArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
      },
      btnTexto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: props.cor,
      }
    });
  }

  render() {
    return (
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <View style={this.styles.btnArea}>
          <Text style={this.styles.btnTexto}>{this.props.nome}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: ''
    };
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);

    this.frases = ["Jesus é o melhor investimento da sua vida!",
      "Melhor morrer do que perder a vida!",
      "Eu gosto muito de ser programador.",
      "Bolsonaro neles rapaz!",
      "A melhor linguagem de programação sem dúvidas é aquela que paga tuas contas!."];
  }

  quebrarBiscoito() {
    let state = this.state;

    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';


    this.setState(state);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./images/biscoito.png')} style={styles.img} />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <Botao cor="#DD7B22" nome="Abrir Biscoito" onPress={this.quebrarBiscoito} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#DD7B22',
    margin: 30,
    textAlign: "center",
    fontStyle: 'italic'
  }
});