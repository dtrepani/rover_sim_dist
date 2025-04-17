import { getExerciseConfigs, getRoverConfig } from '../services/exercises';
import { HttpClient } from '../utils/http-client';
import { ExerciseBase } from './exercise-base';
import { ExerciseResponse } from '../models/exercise-response';

/**
 * A full martian day is 24 hours, 37 minutes, and 22 seconds long. (88642 seconds)
 */
const MARTIAN_DAY_LENGTH = 88642;

export class VariableIrradianceExercise extends ExerciseBase {
    static async run() {
        try {
            const peakIrradiance = await this.getPeakIrradiance();
            const roverConfig = await getRoverConfig();

            const y = peakIrradiance * Math.sin(2 * Math.PI * MARTIAN_DAY_LENGTH);

            // Calculate distance.

            // await this.verify(distance);
        } catch (err: any) {
            this.logError(`Failed to run exercise. Aborting.`);
        }
    }

    static async getPeakIrradiance(): Promise<number> {
        try {
            const configs = await getExerciseConfigs();
            return configs.variable_irradiance?.peak_value;
        } catch (err: any) {
            this.logError(`Failed to get peak irradiance:`, err?.message || err);
            throw err;
        }
    }

    /**
     * @param distance - Max distance a rover can travel each day, in km.
     */
    static async verify(distance: number) {
        try {
            const response = await HttpClient.post<ExerciseResponse>(
                '/verify/variable_irradiance',
                { body: JSON.stringify({ distance }) }
            );

            this.logVerificationResponse(response);
        } catch (err: any) {
            this.logError(`Verification call failed:`, err?.message || err);
            throw err;
        }
    }
}