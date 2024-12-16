import Spreadsheet from "../class/spreadSheets/Spreadsheet";

const spreadsheet1 = new Spreadsheet();

spreadsheet1.addSheet('Sheet1', [
    ['ID', 'Name', 'Score'],
    [1, 'Alice', 95],
    [2, 'Bob', 87],
]);

spreadsheet1.addSheet('Sheet2', [
    ['Product', 'Price'],
    ['Apple', 1.5],
    ['Banana', 0.9],
]);

const spreadsheet2 = new Spreadsheet();

spreadsheet2.addSheet('Data', [
    ['Metric', 'Value'],
    ['Clicks', 100],
    ['Impressions', 1000],
]);

const spreadsheetsMock = [
    { id: 'mockSheetId1', spreadsheet: spreadsheet1 },
    { id: 'mockSheetId2', spreadsheet: spreadsheet2 },
]

export default spreadsheetsMock;