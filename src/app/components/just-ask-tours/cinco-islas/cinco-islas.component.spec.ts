import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CincoIslasComponent } from './cinco-islas.component';

describe('CincoIslasComponent', () => {
  let component: CincoIslasComponent;
  let fixture: ComponentFixture<CincoIslasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CincoIslasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CincoIslasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
