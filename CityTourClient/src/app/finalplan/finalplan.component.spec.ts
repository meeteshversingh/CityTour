import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalplanComponent } from './finalplan.component';

describe('FinalplanComponent', () => {
  let component: FinalplanComponent;
  let fixture: ComponentFixture<FinalplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
