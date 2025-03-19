import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MamoComponent } from './mamo.component';

describe('MamoComponent', () => {
  let component: MamoComponent;
  let fixture: ComponentFixture<MamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MamoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
