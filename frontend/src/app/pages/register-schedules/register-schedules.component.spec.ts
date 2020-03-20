import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSchedulesComponent } from './register-schedules.component';

describe('RegisterSchedulesComponent', () => {
  let component: RegisterSchedulesComponent;
  let fixture: ComponentFixture<RegisterSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
