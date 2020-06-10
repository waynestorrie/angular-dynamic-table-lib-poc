import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteGroupTableComponent } from './site-group-table.component';

describe('SiteGroupTableComponent', () => {
  let component: SiteGroupTableComponent;
  let fixture: ComponentFixture<SiteGroupTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteGroupTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteGroupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
