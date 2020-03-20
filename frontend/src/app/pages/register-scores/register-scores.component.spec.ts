import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterScoresComponent } from './register-scores.component';

describe('RegisterScoresComponent', () => {
  let component: RegisterScoresComponent;
  let fixture: ComponentFixture<RegisterScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
