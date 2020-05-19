import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {SlotsService} from '../slots.service';


@Component({
  selector: 'modal-create-slot',
  templateUrl: './modal-create-slot.component.html',
})
export class ModalCreateSlotContent {  

  constructor(
    public activeModal: NgbActiveModal,
    private slots: SlotsService
    ) {}

  save(data: {date: string; duration: number}) {
    // POST new slot
    this.slots.createSlot(data);
    console.log("saving", data)
    this.activeModal.close("Submit");
  }
}
