import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoraboraComponent } from './borabora.component';

describe('BoraboraComponent', () => {
  let component: BoraboraComponent;
  let fixture: ComponentFixture<BoraboraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoraboraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoraboraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
