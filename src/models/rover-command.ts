export interface RoverCommand {
    // In seconds
    duration: number;
    motor_commands: MotorCommand[];
}

export interface MotorCommand {
    name: string;
    voltage: number;
}