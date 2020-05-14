import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateProposalComponent } from './modal-create-proposal.component';

describe('ModalCreateProposalComponent', () => {
  let component: ModalCreateProposalComponent;
  let fixture: ComponentFixture<ModalCreateProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
