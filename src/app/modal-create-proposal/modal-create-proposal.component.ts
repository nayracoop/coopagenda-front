import {Component} from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-create-proposal',
  templateUrl: './modal-create-proposal.component.html'
})
export class ModalCreateProposalComponent {
  closeResult = '';

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-create-proposal-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  save(data) {
    // POST new slot proposal

    console.log("saving", data);
  }
}
