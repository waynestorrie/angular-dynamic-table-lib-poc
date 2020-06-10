import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DynamicTableComponent } from './dynamic-table.component';

describe('DynamicTableComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DynamicTableComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(DynamicTableComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Dynamic Table'`, async(() => {
    const fixture = TestBed.createComponent(DynamicTableComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Dynamic Table');
  }));
});
