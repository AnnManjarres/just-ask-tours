import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalenqueComponent } from './palenque.component';

describe('PalenqueComponent', () => {
  let component: PalenqueComponent;
  let fixture: ComponentFixture<PalenqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalenqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalenqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
