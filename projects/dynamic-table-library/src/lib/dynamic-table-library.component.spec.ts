import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableLibraryComponent } from './dynamic-table-library.component';

describe('DynamicTableLibraryComponent', () => {
  let component: DynamicTableLibraryComponent;
  let fixture: ComponentFixture<DynamicTableLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTableLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTableLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
