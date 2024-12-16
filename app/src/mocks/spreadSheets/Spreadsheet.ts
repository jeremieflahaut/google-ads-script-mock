import Sheet from "./Sheet";

export default class Spreadsheet {
  private sheets: { [key: string]: Sheet };

  constructor() {
    this.sheets = {};
  }

  addSheet(name: string, data: any[][] = []): void {
    this.sheets[name] = new Sheet(name, data);
  }

  getSheetByName(name: string): Sheet | null {
    return this.sheets[name] || null;
  }
}