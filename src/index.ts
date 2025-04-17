import { HttpClient } from './utils/http-client';
import { ExerciseResponse } from './models/exercise-response';
import { FixedCapacityExercise } from './exercises/fixed-capacity-exercise';
import { FixedDistanceExercise } from './exercises/fixed-distance-exercise';
import { FixedIrradianceExercise } from './exercises/fixed-irradiance-exercise';
import { VariableIrradianceExercise } from './exercises/variable-irradiance-exercise';

async function checkServerHealth() {
    try {
        const response = await HttpClient.get<ExerciseResponse>('/health');
        if (response.status !== 'Ok') {
            throw new Error('Server health not Ok.' + response.message ? ` With message: ${response.message}` : '');
        }
    } catch (err: any) {
        console.error('Server health check failed:', err);
        process.exit(1);
    }
}

async function run() {
    await checkServerHealth();
    await FixedDistanceExercise.run();
    await FixedCapacityExercise.run();
    await FixedIrradianceExercise.run();
    await VariableIrradianceExercise.run();
}

run();