import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DeleteModalComponent } from './deletemodal/deletemodal.component';
import { ModalService } from './modal.service';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [ModalComponent, DeleteModalComponent],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [ModalService],
  bootstrap: [],
})
export class ModalModule {}
