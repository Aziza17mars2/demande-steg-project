import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisonDeRefusComponent } from './raison-de-refus.component';

describe('RaisonDeRefusComponent', () => {
  let component: RaisonDeRefusComponent;
  let fixture: ComponentFixture<RaisonDeRefusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaisonDeRefusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaisonDeRefusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
