import { OperationType } from "../util/operation-type";

export abstract class Operation {
    type: OperationType;
    simbol: string = '';

    constructor(type: OperationType, simbol: string) {
        this.type = type;
        this.simbol = simbol;
    }

    abstract makeOperation(value1: number, value2: number): number;
}
