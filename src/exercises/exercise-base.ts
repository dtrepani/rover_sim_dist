import { ExerciseResponse } from '../models/exercise-response';

export class ExerciseBase {
    static log(...params: any[]) {
        console.log(`[${this.name}]`, ...params);
    }

    static logError(...params: any[]) {
        console.error(`[${this.name}]`, ...params);
    }

    static logVerificationResponse(res: ExerciseResponse) {
        this.log(`Verification message: ${res.message}`);
        // Just an empty line to separate exercises.
        console.log('');
    }

    static async run() {
        throw new Error('Not implemented.');
    }
}