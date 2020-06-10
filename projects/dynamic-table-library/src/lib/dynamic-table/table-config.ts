export class TableConfig {
  headers: Header[];
  title?: string;

  constructor(headers?: Header[], title?: string) {
    this.headers = headers;
    this.title = title;
  }
}

export class Header {
  propertyId: string;
  selectorId: string;
  columnWidth?: number;
  label?: string;
}
