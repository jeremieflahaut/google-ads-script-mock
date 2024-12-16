import Spreadsheet from "./Spreadsheet";

export default class SpreadsheetApp {
    private static spreadsheets: { [key: string]: Spreadsheet } = {};

    static init(mockSpreadsheets: { id: string; sheets: { name: string; data: any[][] }[] }[]): void {
        this.spreadsheets = {};

        mockSpreadsheets.forEach(mockSpreadsheet => {
            const spreadsheet = new Spreadsheet();

            mockSpreadsheet.sheets.forEach(sheet => {
                spreadsheet.addSheet(sheet.name, sheet.data);
            });

            this.spreadsheets[mockSpreadsheet.id] = spreadsheet;
        });
    }

    static openById(id: string): Spreadsheet {

        if (!this.spreadsheets[id]) {
            throw new Error(`Spreadsheet with ID ${id} not found.`);
        }

        return this.spreadsheets[id];
    }


}