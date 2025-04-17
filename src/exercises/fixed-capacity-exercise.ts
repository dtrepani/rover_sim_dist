import { getExerciseConfigs, getRoverConfig } from '../services/exercises';
import { HttpClient } from '../utils/http-client';
import { ExerciseBase } from './exercise-base';
import { ExerciseResponse } from '../models/exercise-response';

export class FixedCapacityExercise extends ExerciseBase {
    static async run() {
        try {
            const stateOfCharge = await this.getStateOfCharge();
            const roverConfig = await getRoverConfig();

            // Calculate distance.

            // await this.verify(distance);
        } catch (err: any) {
            this.logError(`Failed to run exercise. Aborting.`);
        }
    }

    static async getStateOfCharge(): Promise<number> {
        try {
            const configs = await getExerciseConfigs();
            return configs.fixed_capacity?.state_of_charge;
        } catch (err: any) {
            this.logError(`Failed to get state of charge:`, err?.message || err);
            throw err;
        }
    }

    /**
     * @param distance - Distance the rover can travel with batteries charged to `fixed_capacity`, in km.
     */
    static async verify(distance: number) {
        try {
            const response = await HttpClient.post<ExerciseResponse>(
                '/verify/fixed_capacity',
                { body: JSON.stringify({ distance }) }
            );

            this.logVerificationResponse(response);
        } catch (err: any) {
            this.logError(`Verification call failed:`, err?.message || err);
            throw err;
        }
    }
}