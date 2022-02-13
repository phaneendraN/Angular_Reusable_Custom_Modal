import { Component, VERSION, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from './custom-modal/modal.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private modalService: ModalService) {}

  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription;

  ngOnInit(): void {}

  openModal() {
    this.sub = this.modalService
      .openModal(this.entry, 'Are you sure ?', 'click confirm or close')
      .subscribe((v) => {
        //your logic
      });
  }

  openSecondModal() {
    this.sub = this.modalService
      .openDeleteModal(this.entry, 'Are you sure ?', 'click confirm or close1')
      .subscribe((v) => {
        //your logic
      });
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}
