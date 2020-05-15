import {Component} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-create-proposal',
  templateUrl: './modal-create-proposal.component.html'
})
export class ModalCreateProposalContent {

  constructor(public activeModal: NgbActiveModal) {}

  save() {
    // POST new proposal
    console.log("saving");
    this.activeModal.close("Submit");
  }
}
