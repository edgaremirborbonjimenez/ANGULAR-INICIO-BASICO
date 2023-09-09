import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: "<p>Aqui iría un empleado!</p> ",  //HTML inline
  styleUrls: ['./empleado.component.css']
  //styles: ["p{background-color:red}"], //Este es un estilo inline 
})
export class EmpleadoComponent {

  private nombre='Emir';

  apellido='Borbon';

  edad=17;
  
  empresa='Google';

  getNombre(){
    return this.nombre;
  }

  //asignarEmpresa(value: String){}

  enableCubeBinding=false;

  userRegistered= false;

textoDeRegistro='No hay nadie registrado';

  getRegistroUser(){
    this.userRegistered=false;
  }

  setUserRegistered(event:Event){

    //alert("El usuario se a registrado");
    if((<HTMLInputElement>event.target).value === 'si'){
      this.textoDeRegistro="El usuario se a registrado"
    }else{
      this.textoDeRegistro='No hay nadie registrado';

    }
    
  }

  cambiarEmpresa(event:Event){

this.empresa=(<HTMLInputElement>event.target).value;

  }

  

}
