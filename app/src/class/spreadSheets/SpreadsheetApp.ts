import Spreadsheet from "./Spreadsheet";

export default class SpreadsheetApp {
    private static spreadsheets: { [key: string]: Spreadsheet } = {};

    static init(spreadsheetsMock: { id: string; spreadsheet: Spreadsheet }[]): void {
        this.spreadsheets = {};

        spreadsheetsMock.forEach(({ id, spreadsheet }) => {
            this.spreadsheets[id] = spreadsheet;
        });
    }

    static openById(id: string): Spreadsheet {

        if (!this.spreadsheets[id]) {
            throw new Error(`Spreadsheet with ID ${id} not found.`);
        }

        return this.spreadsheets[id];
    }


}