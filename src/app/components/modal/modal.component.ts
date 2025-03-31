import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  // Controla la visibilidad del modal
  @Input() isOpen: boolean = false;
  // Título del modal (opcional)
  @Input() title: string = 'Modal Title';

  // Emite un evento cuando se cierra el modal
  @Output() closeModal = new EventEmitter<void>();

  onClose(): void {
    this.closeModal.emit();
  }
}
