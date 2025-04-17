export interface Wheel {
    diameter: number;
    position: {
        x: number;
        y: number;
    };
    // Reduces the speed of the wheel relative to the motor speed.
    gear_ratio: number;
}

/**
 * - Motors have infinite torque and can accelerate and decelerate the rover instantly.
 * - A motor's speed can be calculated by multiplying its `kv_rating` times the voltage applied to it.
 * - A motor draws a constant current (its `current_rating`) when running at a given voltage.
 */
export interface Motor {
    name: string;
    // In RPM/volt (RPM/V)
    kv_rating: number;
    // In amps (A)
    current_rating: number;
    wheel: Wheel;
}

/**
 * - Batteries can be charged at any rate and have perfectly linear voltage and current curves.
 * - Batteries in a rover are connected in parallel and act as a single larger battery.
 */
export interface Battery {
    capacity: number;
    // All batteries in a rover have the same max voltage.
    max_voltage: number;
}

export interface SolarPanel {
    // Between 0 and 1.
    efficiency: number;
    // In square meters (m^2)
    area: number;
}

export interface RoverConfig {
    motors: Motor[];
    batteries: Battery[];
    solar_panels: SolarPanel[];
}