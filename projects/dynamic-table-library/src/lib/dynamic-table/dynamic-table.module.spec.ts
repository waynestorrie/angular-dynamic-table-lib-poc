import { DynamicTableModule } from './dynamic-table.module';

describe('DynamicTableModule', () => {
  let notesTableModule: DynamicTableModule;

  beforeEach(() => {
    notesTableModule = new DynamicTableModule();
  });

  it('should create an instance', () => {
    expect(notesTableModule).toBeTruthy();
  });
});
