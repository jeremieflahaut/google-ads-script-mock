export default class Sheet {

    private name: string;
    private data: any[][];

    constructor(name: string, data: any[][] = []) {
        this.name = name;
        this.data = data;
    }


    getName(): string {
        return this.name;
    }

    appendRow(rowData: any[]): void {
        this.data.push(rowData);
    }

    clear(): void {
        this.data = [];
    }


}
