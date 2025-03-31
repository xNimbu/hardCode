import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-expandible',
  imports: [CommonModule],
  templateUrl: './tabla-expandible.component.html',
  styleUrl: './tabla-expandible.component.scss'
})
export class TablaExpandibleComponent {
  // Datos de la tabla actual
  @Input() data: any[] = [];
  // Columnas que se mostrarán en esta tabla
  @Input() columns: string[] = [];
  // Columnas para la subtabla (si las filas tienen datos hijos)
  @Input() childColumns?: string[];

  // Objeto para controlar el estado expandido de cada fila (por índice)
  expanded: { [index: number]: boolean } = {};

  toggleExpand(index: number): void {
    this.expanded[index] = !this.expanded[index];
  }
}
