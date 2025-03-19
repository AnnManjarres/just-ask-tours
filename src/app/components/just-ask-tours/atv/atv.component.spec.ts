import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtvComponent } from './atv.component';

describe('AtvComponent', () => {
  let component: AtvComponent;
  let fixture: ComponentFixture<AtvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
