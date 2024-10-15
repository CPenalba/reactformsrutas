import React, { Component } from "react";

export default class Collatz extends Component {
  cajaNumero = React.createRef();
  state = {
    numeros: [],
  };

  calcularCollatz = (num) => {
    let numeros = [];
    while (num !== 1) {
      numeros.push(num);
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        num = num * 3 + 1;
      }
    }
    numeros.push(1);
    return numeros;
  };

  peticionForm = (e) => {
    e.preventDefault();
    let num = parseInt(this.cajaNumero.current.value);
    console.log("El numero es: " + num);
    if (num <= 0) {
      alert("Por favor, introduce un número entero positivo.");
      return;
    }

    this.setState({
      numeros: this.calcularCollatz(num),
    });
  };

  render() {
    return (
      <div>
        <h1>Conjetura de Collatz</h1>
        <label>Introduce el numero: </label>
        <input type="text" ref={this.cajaNumero} /> <br />
        <button onClick={this.peticionForm}>Mostrar numeros</button>
        <ul>
          {this.state.numeros.map((numero, index) => (
            <li key={index}>{numero}</li>
          ))}
        </ul>
      </div>
    );
  }
}
