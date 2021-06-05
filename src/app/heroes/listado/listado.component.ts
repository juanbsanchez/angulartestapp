import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman' ,'Hulk', 'Thor', 'Batman'];
  heroeEliminado: string = '';
  borrarHeroe(){
    console.log('borrando...');
    this.heroeEliminado = this.heroes.shift() || '';
  }
}
