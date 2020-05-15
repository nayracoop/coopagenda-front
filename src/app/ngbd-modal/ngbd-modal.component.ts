import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalCreateProposalContent } from '../modal-create-proposal/modal-create-proposal.component'
import { ModalCreateSlotContent } from '../modal-create-slot/modal-create-slot.component';


@Component({
  selector: 'ngbd-modal',
  templateUrl: './ngbd-modal.component.html',
  styleUrls: ['./ngbd-modal.component.css']
})
export class NgbdModalComponent {
  @Input() label;
  @Input() id;

  content = {
    createSlot: ModalCreateSlotContent,
    createProposal: ModalCreateProposalContent
  }
  constructor(private modalService: NgbModal) { }

  public open(id) {
    const modalRef = this.modalService.open(this.content[id]);
    // @input to child is sent like this 
    // modalRef.componentInstance.name = 'World';
  }
}
