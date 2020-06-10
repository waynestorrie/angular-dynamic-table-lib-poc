import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskGroupTableComponent } from './task-group-table.component';

describe('TaskGroupTableComponent', () => {
  let component: TaskGroupTableComponent;
  let fixture: ComponentFixture<TaskGroupTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskGroupTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskGroupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
