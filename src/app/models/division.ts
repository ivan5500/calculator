import { OperationType } from '../util/operation-type';
import { Operation } from './operation';

export class Division implements Operation {
    type: OperationType;
    simbol: string;

    constructor() {
        this.type = OperationType.ARITMETIC;
        this.simbol = ' / ';
    }

    makeOperation(value1: number, value2: number): number {
        return value1 / value2;
    }
}
