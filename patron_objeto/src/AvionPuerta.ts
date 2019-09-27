export  class Puerta {
    estado:Estado;

    constructor(){
        this.estado=new cerrada(this);
    }

    abrir():Boolean{
        return this.estado.abrir();

    }
    cerrar():Boolean{
        return this.estado.cerrar();

    }
    armar():Boolean{
        return this.estado.armar();

    }
    desarmar():Boolean{
        return this.estado.desarmar();
    }
    reparar():Boolean{
        return this.estado.reparar();
    }
    test():Boolean{
        return this.estado.test();
    }
    untest():Boolean{
        return this.estado.untest();
    }
}

export abstract  class Estado {
    abstract puerta:Puerta;
    abstract name:String;
    abstract abrir():Boolean;
    abstract cerrar():Boolean;
    abstract armar():Boolean;
    abstract desarmar():Boolean;
    abstract reparar():Boolean;
    abstract test():Boolean;
    abstract untest():Boolean;

}


export class  abierta extends Estado{
    puerta :Puerta;
    name:String;
    constructor(miPuerta:Puerta){
        super();
        this.puerta=miPuerta;
        this.name="abierta";
    }

    abrir():Boolean{
        return false;

    }
    cerrar():Boolean{
        this.puerta.estado=new cerrada(this.puerta);
        return true;
        
    }
    armar():Boolean{
        return false;

    }
    desarmar():Boolean{
        return false;

    }
    reparar():Boolean{
        return false;
    }
    test():Boolean{
        return false;
    }
    untest():Boolean{
        return false;
    }
}
export class  cerrada extends Estado{
    puerta :Puerta;
    name:String;
    constructor(miPuerta:Puerta){
        super();
        this.puerta=miPuerta;
        this.name="cerrada";
    }
    abrir():Boolean{
        this.puerta.estado=new abierta(this.puerta);
        return true;

    }
    cerrar():Boolean{
        return false;

    }
    armar():Boolean{
        this.puerta.estado=new Aramada(this.puerta);
        return true;
    }
    desarmar():Boolean{
        return false;
        
    }
    reparar():Boolean{
        return false;
    }
    test():Boolean{
        this.puerta.estado=new Test(this.puerta);
        return false;
    }
    untest():Boolean{
        return false;
    }
}

export class  Aramada extends Estado{
    puerta :Puerta;
    name:String;
    constructor(miPuerta:Puerta){
        super();
        this.puerta=miPuerta;
        this.name="Armada";
    }
    abrir():Boolean{
        this.puerta.estado=new Emergencia(this.puerta);
        return true;

    }
    cerrar():Boolean{
        
        return false;

    }
    armar():Boolean{
        return false;

    }
    desarmar():Boolean{
        this.puerta.estado=new cerrada(this.puerta);
        return true;
        
    }
    reparar():Boolean{
        return false;
    }
    test():Boolean{
        return false;
    }
    untest():Boolean{
        return false;
    }
}
export class  Emergencia extends Estado{
    puerta :Puerta;
    name:String;
    constructor(miPuerta:Puerta){
        super();
        this.puerta=miPuerta;
        this.name="Emergencia";
    }
    abrir():Boolean{
        return false;
    }
    cerrar():Boolean{
        return false;

    }
    armar():Boolean{
        return false;

    }
    desarmar():Boolean{
        return false;
        
    }
    reparar():Boolean{
        this.puerta.estado=new cerrada(this.puerta);
        return true;
    }
    test():Boolean{
        return false;
    }
    untest():Boolean{
        return false;
    }
}





export class  Test extends Estado{
    puerta :Puerta;
    name:String;
    constructor(miPuerta:Puerta){
        super();
        this.puerta=miPuerta;
        this.name="test";
    }
    abrir():Boolean{
        return false;
    }
    cerrar():Boolean{
        return false;

    }
    armar():Boolean{
        return false;

    }
    desarmar():Boolean{
        return false;
        
    }
    reparar():Boolean{
        return false;
    }
    test():Boolean{
        return false;
    }
    untest():Boolean{
        this.puerta.estado=new cerrada(this.puerta);
        return true;
    }
}

