import { OperationType } from '../util/operation-type';
import { Operation } from './operation';

export class Addition extends Operation{
    private _simbol: string = '+';
    constructor(type: OperationType, simbol: string) {
        super(type, simbol);
        super.simbol = this._simbol;
    }

    makeOperation(value1: number, value2: number): number {
        return value1 + value2;
    }
}
