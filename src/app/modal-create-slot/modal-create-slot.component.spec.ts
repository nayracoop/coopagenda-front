import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateSlotContent } from './modal-create-slot.component';

describe('ModalCreateSlotContent', () => {
  let component: ModalCreateSlotContent;
  let fixture: ComponentFixture<ModalCreateSlotContent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateSlotContent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateSlotContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
