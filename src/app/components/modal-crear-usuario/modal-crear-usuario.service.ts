import { ComponentType } from "@angular/cdk/portal";
import { inject, Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Injectable({ providedIn: "root"})
export class ModalCrearUsuario {

  private readonly modalDialog = inject(MatDialog)
  
  constructor() {}
  openModal(componentRef: ComponentType<any>, data?: any): void {
    this.modalDialog.open(componentRef, { ...data })
  }

  closeModal(): void {
    this.modalDialog.closeAll()
  }
}