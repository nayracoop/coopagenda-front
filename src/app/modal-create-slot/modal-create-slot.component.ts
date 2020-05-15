import {Component} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-create-slot',
  templateUrl: './modal-create-slot.component.html',
})
export class ModalCreateSlotContent {  

  constructor(public activeModal: NgbActiveModal) {}

  save() {
    // POST new slot
    console.log("saving")
    this.activeModal.close("Submit");
  }
}
