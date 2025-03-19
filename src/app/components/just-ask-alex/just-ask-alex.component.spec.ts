import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustAskAlexComponent } from './just-ask-alex.component';

describe('JustAskAlexComponent', () => {
  let component: JustAskAlexComponent;
  let fixture: ComponentFixture<JustAskAlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JustAskAlexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustAskAlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
