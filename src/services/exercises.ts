import { HttpClient } from '../utils/http-client';
import { ExerciseConfigs } from '../models/exercise-configs';
import { RoverConfig } from '../models/rover-config';

/**
 * Because of the short life cycle of this program, it's safe to cache the configs without an expiration time.
 */
let exerciseConfigs: ExerciseConfigs | null =  null;
let roverConfig: RoverConfig | null = null;

export async function getExerciseConfigs(): Promise<ExerciseConfigs> {
    if (!exerciseConfigs) {
        exerciseConfigs = await HttpClient.get<ExerciseConfigs>('/exercises');
    }

    return exerciseConfigs;
}

export async function getRoverConfig(): Promise<RoverConfig> {
    if (!roverConfig) {
        roverConfig = await HttpClient.get<RoverConfig>('/rover/config');
    }

    return roverConfig;
}