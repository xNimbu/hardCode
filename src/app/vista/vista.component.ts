import { Component } from '@angular/core';
import { BotonComponent } from "../components/boton/boton.component";
import { TablaComponent } from "../components/tabla/tabla.component";
import { TablaExpandibleComponent } from "../components/tabla-expandible/tabla-expandible.component";
import { ModalComponent } from "../components/modal/modal.component";

@Component({
  selector: 'app-vista',
  imports: [BotonComponent, TablaComponent, TablaExpandibleComponent, ModalComponent],
  templateUrl: './vista.component.html',
  styleUrl: './vista.component.scss'
})
export class VistaComponent {

  // Funcion Boton
  accion() {
    console.log('Botón clickeado!');
  }

  // Datos tabla Simple
  listaDatos = [
    { id: 1, nombre: 'Juan', email: 'juan@example.com' },
    { id: 2, nombre: 'María', email: 'maria@example.com' },
    { id: 3, nombre: 'Carlos', email: 'carlos@example.com' }
  ];

  // Datos tabla Expandible
  nivel1Data = [
    {
      col1: 'Dato 1',
      col2: 'Dato 2',
      col3: 'Dato 3',
      // Datos para el nivel 2: 6 columnas
      children: [
        {
          col1: 'Dato 1.1',
          col2: 'Dato 1.2',
          col3: 'Dato 1.3',
          col4: 'Dato 1.4',
          col5: 'Dato 1.5',
          col6: 'Dato 1.6',
          // Datos para el nivel 3: 4 columnas
          children: [
            { col1: 'Dato 1.1.1', col2: 'Dato 1.1.2', col3: 'Dato 1.1.3', col4: 'Dato 1.1.4' }
          ],
          // Opcional: si el nivel 2 sabe qué columnas usar para la subtabla
          childColumns: ['col1', 'col2', 'col3', 'col4']
        }
      ]
    },
    {
      col1: 'Dato A',
      col2: 'Dato B',
      col3: 'Dato C'
      // Esta fila no tiene datos hijos y, por lo tanto, no mostrará botón de expansión
    }
  ];

  // Definir las columnas para cada nivel
  nivel1Columns = ['col1', 'col2', 'col3'];
  nivel2Columns = ['col1', 'col2', 'col3', 'col4', 'col5', 'col6'];
  nivel3Columns = ['col1', 'col2', 'col3', 'col4'];

  // Cosas para modal
  isModalOpen: boolean = false;

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
