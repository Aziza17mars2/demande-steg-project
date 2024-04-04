import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilGuichetComponent } from './acceuil-guichet.component';

describe('AcceuilGuichetComponent', () => {
  let component: AcceuilGuichetComponent;
  let fixture: ComponentFixture<AcceuilGuichetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilGuichetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceuilGuichetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
