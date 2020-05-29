import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slot-form',
  templateUrl: './slotForm.component.html',
  styleUrls: ['./slotForm.component.css'],
})
export class SlotForm {
  constructor(public activeModal: NgbActiveModal) {}

  save(data: { date: string; duration: number }) {
    console.log('saving', data);
    this.activeModal.close('Submit');
  }
}
