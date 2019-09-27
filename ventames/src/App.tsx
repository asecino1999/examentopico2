import React from 'react';
//import logo from './logo.svg';
import './App.css';
import * as ventas from './ventas';
interface IState {
  valores: string | string[],
  separar_ventas: mesVal[];
}
interface mesVal {
  mes: string,
  val: number
}
class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    var separar_ventas4: RegExp = /([a-zA-Z]*)(:)?(\	|\ )*(s|S)\/.(\ )*[0-9]+(\,[0-9]*)*(\.[0-9]*)*/
    separar_ventas4 = new RegExp(separar_ventas4, "\g")

    var cadenas: string[] = ventas.texto.match(separar_ventas4) || []
    var meses: string[] = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ]
    var valores: mesVal[] = meses.map((element): mesVal => {
      return { mes: element, val: 0 };
    });
    var separar_numero: RegExp = /[0-9]+(\,[0-9]*)*(\.[0-9]*)*/
    valores.forEach(ele => {

      var delMes = cadenas.map((element): number => {
        //console.log(element,ele.mes,element.toLowerCase(),element.toLowerCase().indexOf(ele.mes))
        if (element.toLowerCase().indexOf(ele.mes)>=0) {
          var numeroNul = element.match(separar_numero)
          var numero
          if (numeroNul) {
            numero = numeroNul[0]
          } else
            numero = "0"
          //console.log(ele, numero)
          return parseFloat(numero)
        }
        else {
          return 0
        }
      });
      ele.val = delMes.reduce((a, b) => a + b)
    });
    console.log(valores)
    this.state = {
      valores: ventas.texto,
      separar_ventas: valores

    }

  }
  render() {
    console.log(this.state.separar_ventas)
    return (<div>
      <div>
        ganacias por mes 
      </div>
      <br/>
      {
        this.state.separar_ventas.map(element => {
        return(<div key={element.mes}>
          {element.mes} : S/.{element.val}
        </div>)
        })
      }

    </div>)
  }
}

export default App;
