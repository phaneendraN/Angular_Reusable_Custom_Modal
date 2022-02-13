import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';

@NgModule({
  declarations: [ModalComponent],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [ModalService],
  bootstrap: [],
})
export class ModalModule {}
