import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CholonForeverComponent } from './cholon-forever.component';

describe('CholonForeverComponent', () => {
  let component: CholonForeverComponent;
  let fixture: ComponentFixture<CholonForeverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CholonForeverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CholonForeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
