import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TProposal } from '../data/entities';

@Component({
  selector: 'app-proposal-view',
  templateUrl: './proposalView.component.html',
  styleUrls: ['./proposalView.component.css'],
})
export class ProposalView {
  @Input()
  proposal: TProposal;

  constructor(public activeModal: NgbActiveModal) {}

  click(): void {
    console.log('a');
  }
}
