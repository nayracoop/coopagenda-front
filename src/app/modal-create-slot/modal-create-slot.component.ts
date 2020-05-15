import {Component} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-create-slot',
  templateUrl: './modal-create-slot.component.html',
})
export class ModalCreateSlotContent {  

  constructor(public activeModal: NgbActiveModal) {}

  save(data) {
    // POST new slot
    console.log("saving", data)
    this.activeModal.close("Submit");
  }
}
