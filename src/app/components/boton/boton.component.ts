import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  imports: [],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.scss'
})
export class BotonComponent {
  // Propiedades para personalizar el botón
  @Input() texto: string = 'Botón';
  @Input() tipo: string = 'button';

  // Evento para manejar clics en el botón
  @Output() clickBoton = new EventEmitter<void>();

  onClick() {
    this.clickBoton.emit();
  }

}
