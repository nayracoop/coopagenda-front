import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {Proposal} from '../interfaces'
import { UserService } from '../user.service'


@Component({
  selector: 'app-modal-view-proposal',
  templateUrl: './modal-view-proposal.component.html',
  styleUrls: ['./modal-view-proposal.component.css']
})
export class ModalViewProposalContent implements OnInit {
  @Input() proposal;

  constructor(    
    public activeModal: NgbActiveModal,
    public user: UserService
  ) {}

  ngOnInit(): void {
  }

  click(): void {
    console.log("a", this.proposal);
  }

}
