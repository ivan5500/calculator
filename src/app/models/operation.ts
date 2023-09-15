import { OperationType } from "../util/operation-type";

export interface Operation {
    type: OperationType;
    simbol: string;

    makeOperation(value1: number, value2: number): number;
}
