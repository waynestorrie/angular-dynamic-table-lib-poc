import { TableModule } from './table.module';

describe('TableModule', () => {
  let notesModule: TableModule;

  beforeEach(() => {
    notesModule = new TableModule();
  });

  it('should create an instance', () => {
    expect(notesModule).toBeTruthy();
  });
});
