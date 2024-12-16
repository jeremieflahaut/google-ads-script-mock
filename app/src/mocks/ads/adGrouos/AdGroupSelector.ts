import AdGroup from "./AdGroup";
import AdGroupIterator from "./AdGroupIterator";

export default class AdGroupSelector {
    private ids: number[] = [];
    private conditions: string[] = [];
    private adGroups: AdGroup[];

    constructor(adGroups: AdGroup[]) {
        this.adGroups = adGroups;
    }

    withIds(ids: number[]): this {
        this.ids = ids;
        return this;
    }

    withCondition(condition: string): this {
        this.conditions.push(condition);
        return this;
    }

    get(): AdGroupIterator {
        let filteredAdGroups = this.adGroups;

        if (this.ids.length > 0) {
            filteredAdGroups = filteredAdGroups.filter(adGroup => this.ids.includes(adGroup.getId()));
        }


        if (this.conditions.length > 0) {
            this.conditions.forEach(condition => {
                const [field, operator, value] = this.parseCondition(condition);
                filteredAdGroups = filteredAdGroups.filter(adGroup => {
                    const fieldValue = adGroup[field as keyof AdGroup];
                    switch (operator) {
                        case '=':
                            return this.isValidField(field, adGroup) && adGroup[field as keyof AdGroup] === value;
                        case 'CONTAINS':
                            return this.isValidField(field, adGroup) && (adGroup[field as keyof AdGroup] as string)?.includes(value);
                        case '!=':
                            return this.isValidField(field, adGroup) && adGroup[field as keyof AdGroup] !== value;
                        default:
                            throw new Error(`Opérateur non supporté : ${operator}`);
                    }

                });

            });
        }

        return new AdGroupIterator(filteredAdGroups);
    }

    private parseCondition(condition: string): [string, string, string] {
        const regex = /^(\w+)\s*([=|!=|CONTAINS]+)\s*'([^']+)'$/;
        const match = condition.match(regex);

        if (!match) {
            throw new Error(`Condition invalide : ${condition}`);
        }

        return [match[1], match[2], match[3]];
    }

    private isValidField(field: string, adGroup: AdGroup): boolean {
        return field in adGroup;
    }

}
