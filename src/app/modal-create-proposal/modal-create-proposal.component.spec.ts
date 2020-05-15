import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateProposalContent } from './modal-create-proposal.component';

describe('ModalCreateProposalContent', () => {
  let component: ModalCreateProposalContent;
  let fixture: ComponentFixture<ModalCreateProposalContent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateProposalContent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateProposalContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
