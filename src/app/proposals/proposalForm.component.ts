import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TProposal } from '../data/entities';

@Component({
  selector: 'app-proposal-form',
  templateUrl: './proposalForm.component.html',
  styleUrls: ['./proposalForm.component.css'],
})
export class ProposalForm {
  @Input() proposal: TProposal;

  constructor(public activeModal: NgbActiveModal) {}

  save(data) {
    console.log('saving', data);
    this.activeModal.close('Submit');
  }
}
