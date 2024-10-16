import React, { Component } from "react";
export default class TablaMultiplicar extends Component {
  cajaNumero = React.createRef();
  state = {
    tabla: [],
  };
  mostrarTabla = (e) => {
    e.preventDefault();
    let numero = parseInt(this.cajaNumero.current.value);
    console.log(numero);
    var aux = [];
    for (var i = 1; i <= 10; i++) {
      var operacion = numero + " * " + i;
      var resultado = numero * i;
      //ALMACENAMOS EL DIBUJO DIRECTAMENTE
      aux.push(
        <tr>
          <td>{operacion}</td>
          <td>{resultado}</td>
        </tr>
      );
    }
    this.setState({
      tabla: aux,
    });
  };
  render() {
    return (
      <div>
        <h1>TablaMultiplicar</h1>
        <form>
          <label>Introduzca número</label>
          <input type="text" ref={this.cajaNumero} />
          <button onClick={this.mostrarTabla}>Tabla multiplicar</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Operación</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>{this.state.tabla}</tbody>
        </table>
      </div>
    );
  }
}
