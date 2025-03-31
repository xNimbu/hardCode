import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabla',
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.scss'
})
export class TablaComponent {
  // Array de objetos que representa los datos de la tabla
  @Input() datos: any[] = [];

  // Array de strings para definir las columnas a mostrar (puede ser el nombre de la propiedad de cada objeto)
  @Input() columnas: string[] = [];
}
