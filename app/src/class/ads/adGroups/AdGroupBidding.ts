export default class AdGroupBidding {

    private cpa: number;

    constructor() {
        this.cpa = this.generateRandomCpa();
    }

    getCpa(): number {
        return this.cpa;
    }

    setCpa(cpa: number): void {
        if (cpa < 1.0 || cpa > 100000.0) {
            throw new Error('ROAS doit être compris entre 1.0 et 100000.0');
        }
        
        this.cpa = cpa;
    }

    private generateRandomCpa(): number {
        return parseFloat((Math.random() * (100000 - 1) + 1).toFixed(2));
    }
}
