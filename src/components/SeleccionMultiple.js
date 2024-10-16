import React, { Component } from "react";

export default class SeleccionMultiple extends Component {
  selectMultiple = React.createRef();

  state = {
    seleccionados: "",
  };

  mostrarMultiples = (e) => {
    e.preventDefault();
    //dentro de un select multiple y no multiple tenemos un array con todos los options
    let options = this.selectMultiple.current.options;
    let datos = "";
    //cada objeto option dentro del array contiene un atributo para saber si esta seleccioando: selected
    //value, text
    for (var option of options) {
      if (option.selected == true) {
        datos += option.value + " ";
      }
    }
    //mofificamos el state del render()
    this.setState({
      seleccionados: datos,
    });
  };

  render() {
    return (
      <div>
        <h1>Seleccion multiple forms</h1>
        <h2 style={{ color: "blue" }}> {this.state.seleccionados}</h2>
        <form onSubmit={this.mostrarMultiples}>
          <select size={10} multiple ref={this.selectMultiple}>
            <option>Elemento 1</option>
            <option>Elemento 2</option>
            <option>Elemento 3</option>
            <option>Elemento 4</option>
            <option>Elemento 5</option>
            <option>Elemento 6</option>
            <option>Elemento 7</option>
          </select>
          <button>Mostrar selecciones</button>
        </form>
      </div>
    );
  }
}
