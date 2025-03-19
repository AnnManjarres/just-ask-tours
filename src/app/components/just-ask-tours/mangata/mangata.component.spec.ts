import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangataComponent } from './mangata.component';

describe('MangataComponent', () => {
  let component: MangataComponent;
  let fixture: ComponentFixture<MangataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MangataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
