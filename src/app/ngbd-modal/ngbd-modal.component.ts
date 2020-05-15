import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalCreateProposalContent } from '../modal-create-proposal/modal-create-proposal.component'
import { ModalCreateSlotContent } from '../modal-create-slot/modal-create-slot.component';

/*    SUPER DUMMY CONTENT FOR MOCKUP PURPOSES 
    --- erase after all content is created ---
*/
@Component({
  selector: 'ngbd-modal-content',
  template: `
    <form (ngSubmit)="onSubmit()">
      <div class="modal-header">
        <h4 class="modal-title">Hi there!</h4>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Hello, {{name}}!</p>
      </div>
      <div class="modal-footer">
        <button  class="btn btn-outline-success" (click)="onClick()">Submit</button>
        <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
      </div>
    </form>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }

  onClick() {
    console.log("Submit button was clicked!");
  }

  onSubmit() {
    console.log("Form was submitted!");
    this.activeModal.close("Submit");
  }
}

//


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
    createProposal: ModalCreateProposalContent,
    editSlot: NgbdModalContent,
    editProposal: NgbdModalContent,
    viewProposal: NgbdModalContent
  }
  constructor(private modalService: NgbModal) { }

  public open(id) {
    const modalRef = this.modalService.open(this.content[id]);
    // @input to child is sent like this 
    // modalRef.componentInstance.name = 'World';
  }
}
