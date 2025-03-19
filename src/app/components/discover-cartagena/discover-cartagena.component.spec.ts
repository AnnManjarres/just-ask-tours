import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverCartagenaComponent } from './discover-cartagena.component';

describe('DiscoverCartagenaComponent', () => {
  let component: DiscoverCartagenaComponent;
  let fixture: ComponentFixture<DiscoverCartagenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverCartagenaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverCartagenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
