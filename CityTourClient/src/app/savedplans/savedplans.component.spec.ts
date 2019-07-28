import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedplansComponent } from './savedplans.component';

describe('SavedplansComponent', () => {
  let component: SavedplansComponent;
  let fixture: ComponentFixture<SavedplansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedplansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
