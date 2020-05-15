import {Component} from '@angular/core';
import {NgbModal, NgbTimepicker} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-create-slot',
  templateUrl: './modal-create-slot.component.html',
})
export class ModalCreateSlotContent {
  closeResult = '';
  
  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-create-slot-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  save(data) {
    // POST new slot
    console.log("saving", data)
  }

  onTimeChange(element, event) {
    console.log(element);
  }
}
