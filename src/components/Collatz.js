import React, { Component } from "react";
export default class Collatz extends Component {
  //NECESITAMOS UN OBJETO CAJA PARA RECUPERAR EL DATO
  cajaNumero = React.createRef();
  state = {
    numeros: [],
  };
  mostrarCollatz = (e) => {
    e.preventDefault();
    let numero = parseInt(this.cajaNumero.current.value);
    let aux = [];
    aux.push(numero);
    this.state.numeros.push(numero);
    while (numero != 1) {
      if (numero % 2 == 0) {
        numero = numero / 2;
      } else {
        numero = numero * 3 + 1;
      }
      aux.push(numero);
    }
    this.setState({
      numeros: aux,
    });
  };
  render() {
    return (
      <div>
        <h1>Collatz</h1>
        <form onSubmit={this.mostrarCollatz}>
          <label>Introduzca un número</label>
          <input type="text" ref={this.cajaNumero} />
          <button>Conjetura Collatz</button>
        </form>
        <ul>
          {this.state.numeros.map((numero, index) => {
            return <li key={index}>{numero}</li>;
          })}
        </ul>
      </div>
    );
  }
}
