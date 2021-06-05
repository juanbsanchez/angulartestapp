import {Component} from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `

    <h1>{{title}}</h1>

    <h3>La base es: <strong>{{base}}</strong></h3>

    <span>{{num}}</span>
    <br>
    <br>
    <button (click)="acum(1)">Aumentar</button><br><br>
    <button (click)="acum(-1)">Reducir</button>

  `
})

export class ContadorComponent {

  title: string = 'Contador App';
  num: number = 10;
  base: number = 5;

  aumentar(){
    this.num +=1;
  }

  reducir(){
    this.num -=1;
  }

  acum(valor: number){
    this.num += this.base;
  }

  acumular(valor: number, operacion: string){
    if(operacion == 'sum'){
      this.num+=valor;
    }
    else if(operacion == 'res'){
      this.num-=valor;
    }
    return;
  }

}
