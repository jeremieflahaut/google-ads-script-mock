import AdGroup from "./AdGroup";

export default class AdGroupIterator {
    private adGroups: AdGroup[];

    constructor(adGroups: AdGroup[]) {
        this.adGroups = [...adGroups];
    }

    hasNext(): boolean {
        return this.adGroups.length > 0;
    }

    next(): AdGroup {
        if (!this.hasNext()) {
            throw new Error('No more AdGroups available.');
        }
        return this.adGroups.shift() as AdGroup;
    }
}