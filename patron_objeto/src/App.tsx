import React from 'react';
//import logo from './logo.svg';
import './App.css';
import * as Avion from './AvionPuerta';

interface IState{
  puerta:Avion.Puerta;
  estado:String;
}
interface operacion{
  n:String;
  ope:any;
}

class App extends React.Component <{},IState>{
  constructor(props:any){
    super(props);
    this.state={
      estado:"cerrada",
      puerta:new Avion.Puerta(),
    }
  }
  abrir():void{
    this.state.puerta.abrir();
    var estado:String=this.state.puerta.estado.name; 
    this.setState({estado:estado });
  }
  Cerrar():void{
    this.state.puerta.cerrar();
    var estado:String=this.state.puerta.estado.name; 
    this.setState({estado:estado });
  }
  armar():void{
    this.state.puerta.armar();
    var estado:String=this.state.puerta.estado.name; 

    this.setState({estado:estado });
  }
  desarmar():void{
    this.state.puerta.desarmar();
    var estado:String=this.state.puerta.estado.name; 
    this.setState({estado:estado });
  }
  reparar():void{
    this.state.puerta.reparar();
    var estado:String=this.state.puerta.estado.name; 
    this.setState({estado:estado });
  }
  test():void{
    this.state.puerta.test();
    var estado:String=this.state.puerta.estado.name; 
    this.setState({estado:estado });
  }
  untest():void{
    this.state.puerta.untest();
    var estado:String=this.state.puerta.estado.name; 
    this.setState({estado:estado });
  }
  render(){
    var op:operacion[];
    op=[{n:"cerrar", ope:()=>this.Cerrar()} as operacion,
        {n:"Abrir" , ope:()=>this.abrir()} as operacion,
        {n:"armar",ope:()=>this.armar()}as operacion,
        {n:"Desarmar",ope:()=>this.desarmar()} as operacion,
        {n:"reparar",ope:()=>this.reparar()} as operacion,
        {n:"test",ope:()=>this.test()} as operacion,
        {n:"endtest",ope:()=>this.untest()} as operacion
      ];
    
    return (<div className={"bots"}>
      <div className={"bots"}>
      {op.map(element => {
        return(
          <div className={"bot"} key={element.n+""}>
            <button   onClick={element.ope}>
          {element.n}
        </button>

          </div>
        
        )
      })}
      </div>
      <br/>
      <div>
        {this.state.estado}
      </div>
    </div>)
  }
}




export default App;
