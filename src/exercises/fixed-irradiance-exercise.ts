import { getExerciseConfigs, getRoverConfig } from '../services/exercises';
import { HttpClient } from '../utils/http-client';
import { ExerciseBase } from './exercise-base';
import { ExerciseResponse } from '../models/exercise-response';

export class FixedIrradianceExercise extends ExerciseBase {
    static async run() {
        try {
            const fixedIrradiance = await this.getFixedIrradiance();
            const roverConfig = await getRoverConfig();

            // Calculate speed.

            // await this.verify(speed);
        } catch (err: any) {
            this.logError(`Failed to run exercise. Aborting.`);
        }
    }

    static async getFixedIrradiance(): Promise<number> {
        try {
            const configs = await getExerciseConfigs();
            return configs.fixed_irradiance?.value;
        } catch (err: any) {
            this.logError(`Failed to get fixed irradiance:`, err?.message || err);
            throw err;
        }
    }

    /**
     * @param speed - Max speed the rover can maintain indefinitely with the solar panels generating power, in mm/s.
     */
    static async verify(speed: number) {
        try {
            const response = await HttpClient.post<ExerciseResponse>(
                '/verify/fixed_irradiance',
                { body: JSON.stringify({ speed }) }
            );

            this.logVerificationResponse(response);
        } catch (err: any) {
            this.logError(`Verification call failed:`, err?.message || err);
            throw err;
        }
    }
}