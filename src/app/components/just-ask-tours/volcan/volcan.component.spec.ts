import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolcanComponent } from './volcan.component';

describe('VolcanComponent', () => {
  let component: VolcanComponent;
  let fixture: ComponentFixture<VolcanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolcanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolcanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
