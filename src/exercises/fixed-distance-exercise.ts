import { getExerciseConfigs, getRoverConfig } from '../services/exercises';
import { RoverCommand } from '../models/rover-command';
import { HttpClient } from '../utils/http-client';
import { ExerciseBase } from './exercise-base';
import { ExerciseResponse } from '../models/exercise-response';

export class FixedDistanceExercise extends ExerciseBase {
    static async run() {
        try {
            const fixedDistance = await this.getFixedDistance();
            const roverConfig = await getRoverConfig();

            // Calculate duration and motor commands.

            // await this.verify(command);
        } catch (err: any) {
            this.logError(`Failed to run exercise. Aborting.`);
        }
    }

    static async getFixedDistance(): Promise<number> {
        try {
            const configs = await getExerciseConfigs();
            return configs.fixed_distance?.value;
        } catch (err: any) {
            this.logError(`Failed to get fixed distance:`, err?.message || err);
            throw err;
        }
    }

    static async verify(command: RoverCommand) {
        try {
            const response = await HttpClient.post<ExerciseResponse>('/verify/fixed_distance', { body: JSON.stringify(command) });
            this.logVerificationResponse(response);
        } catch (err: any) {
            this.logError(`Verification call failed:`, err?.message || err);
            throw err;
        }
    }
}