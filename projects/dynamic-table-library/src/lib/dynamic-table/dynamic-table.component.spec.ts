import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableComponent } from './dynamic-table.component';
import { SiteGroupTableComponent } from './site-group-table/site-group-table.component';
import { TaskGroupTableComponent } from './task-group-table/task-group-table.component';
import { NotesGroupTableComponent } from './notes-group-table/notes-group-table.component';

describe('DynamicTableComponent', () => {
  let component: DynamicTableComponent;
  let fixture: ComponentFixture<DynamicTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DynamicTableComponent,
        SiteGroupTableComponent,
        TaskGroupTableComponent,
        NotesGroupTableComponent
      ],
      imports: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
