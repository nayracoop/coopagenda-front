import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Proposal } from '../interfaces';


@Component({
  selector: 'app-modal-edit-proposal',
  templateUrl: './modal-edit-proposal.component.html',
  styleUrls: ['./modal-edit-proposal.component.css']
})
export class ModalEditProposalContent implements OnInit {
  @Input() proposal: Proposal;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }


  save(data) {
    // POST new slot
    console.log("saving", data)
    this.activeModal.close("Submit");
  }
}
