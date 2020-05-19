import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-edit-proposal',
  templateUrl: './modal-edit-proposal.component.html',
  styleUrls: ['./modal-edit-proposal.component.css']
})
export class ModalEditProposalContent implements OnInit {
  @Input() proposal;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
