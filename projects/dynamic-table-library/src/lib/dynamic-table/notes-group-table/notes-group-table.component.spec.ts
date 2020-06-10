import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesGroupTableComponent } from './notes-group-table.component';

describe('NotesGroupTableComponent', () => {
  let component: NotesGroupTableComponent;
  let fixture: ComponentFixture<NotesGroupTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesGroupTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesGroupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
