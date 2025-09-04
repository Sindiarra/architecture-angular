import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  constructor() { }

  openModal(modalRef: string): void {

  }

  closeModal(modalRef: string): void {
    const modalElement = document.getElementById(modalRef);
    if (modalElement) {
      const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
      modal.hide();
    } else {
      console.error('Modal element not found!');
    }
  }

}
