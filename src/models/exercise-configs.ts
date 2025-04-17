export interface ExerciseConfigs {
    fixed_distance: {
        // In millimeters (mm)
        value: number;
    };
    fixed_capacity: {
        // In percent (%)
        state_of_charge: number;
    };
    fixed_irradiance: {
        // In watts per square meter (W/m^2)
        value: number;
    };
    variable_irradiance: {
        // In watts per square meter (W/m^2)
        peak_value: number;
    };
}