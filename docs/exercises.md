[Back](/README.md)

# Objective
You are writing procedures for NASA's new Martian _**Endurance Rover**_. However, the rover is not built yet, and you have no idea what it will look like. Nasa has provided you with a `rover_sim` to verify your procedures.

The `rover_sim` is an HTTP server that simulates the rover's behavior and also contains a bank of potential rover configurations with different numbers of wheels, different batteries, motors, solar panels, etc. - your procedures must work with any of them.

At this early stage, the `rover_sim` is very simple and makes the following assumptions:
- The motors on the rover have infinite torque and can accelerate and decelerate the rover instantly.
- A motor's speed can be computed by multiplying its KV rating with the voltage applied to it.
- Each motor draws a constant current (its `current_rating`) when running at a given voltage.
- All gear ratios provided reduce the speed of the wheel relative to the motor speed.
- The batteries on the rover can be charged at any rate and have perfectly linear voltage and current curves.
- The batteries can be safely discharged to 0% and charged to 100%.
- The batteries can supply a maximum voltage defined in the rover configuration.
- For units, assume the following:
    - Distances are in `millimeters` (mm)
    - Voltages are in `volts` (V)
    - Power is in `watts` (W)
    - Current is in `amps` (A)
    - Time is in `seconds` (s)
    - Speed is in `millimeters per second` (mm/s)
    - Energy is in `watt-hours` (Wh)
    - Solar irradiance is in `watts per square meter` (W/m^2)
    - Area is in `square meters` (m^2)
    - State of charge is in `percent` (%)
    - Efficiency is a fraction between 0 and 1
    - KV rating is in `RPM/volt` (RPM/V)

Write an application in Rust that solves as many of the following exercises as possible within the allotted time.

## 1. Fixed distance rover command
Generate a command that moves the rover a fixed distance provided by the `fixed_distance` value in `GET /exercises` in the lowest time possible.
A command is a JSON object with the following fields:
```json
{
    "duration": float, // (s)
    "motor_commands":[
        {
            "name": string,
            "voltage": float // (V)
        }
    ]
}
```

Here is an example of a command:
```json
{
    "duration":2.283034183670227,
    "motor_commands":
    [
        {
            "name":"Motor_A",
            "voltage":15.341967432122557
        },
        {
            "name":"Motor_B",
            "voltage":23.832563
        },
        {
            "name":"Motor_C",
            "voltage":7.802751609584909
        }
    ]
}
```

When you have generated the rover command, send it to the `POST /verify/fixed_distance` endpoint. The server will respond with a status code and message indicating whether the command was successful or not.

## 2. Fixed capacity travel distance
The rover has onboard batteries.

Using the `fixed_capacity` value in `GET /exercises`, determine how far in `km` the rover can travel with the batteries charged to the `fixed_capacity` state of charge.

Assume the rover is traveling at night and the solar panels are not generating any power.

Post the distance to the `POST /verify/fixed_capacity` endpoint. The server will respond with a status code and message indicating whether the distance is the maximum the rover can travel.

## 3. Fixed solar irradiance travel speed
The rover also has solar panels. Assume the rover starts at 0% state of charge.

Using the `fixed_irradiance` value in `GET /exercises`, determine the maximum speed in `mm/s` the rover can maintain indefinitely with the solar panels generating power.

Be sure to account for the efficiency of the solar panels and the maximum voltage of the batteries.
Post the speed to the `POST /verify/fixed_irradiance` endpoint. The server will respond with a status code and message indicating whether the speed can be maintained indefinitely with the solar irradiance.

## 4. Variable solar irradiance travel distance
The solar irradiance is no longer fixed - it starts at 0 `W/m^2` in the morning, increases sinusoidally to a maximum amplitude at 'noon', and then decreases back to 0 `W/m^2` at 'night'.

Using the `variable_irradiance` value in `GET /exercises` as the peak amplitude of the solar irradiance, determine the maximum distance in `km` the rover can travel each day given the solar irradiance.

Assume the rover starts at 0% state of charge in the morning, and the rover is positioned on the equator.

Assume a Martian day is 24 hours, 37 minutes, and 22 seconds long.

Post the distance to the `POST /verify/variable_irradiance` endpoint. The server will respond with a status code and message indicating whether the distance is correct

# API Reference
### - `GET /health` - returns a status code indicating the server is running and reachable.
### - `GET /exercises` - returns a list of exercises with their details - The exercise parameters change every time the server is restarted.
### - `GET /rover/config` - returns the rover configuration - The rover configuration changes every time the server is restarted.
### - `POST /verify/fixed_distance` - takes in a rover command and returns a status code and message indicating whether the command was successful or not.
### - `POST /verify/fixed_capacity` - takes in a distance (`float`) and returns a status code and message indicating whether the distance is within the rover's capacity or not.
### - `POST /verify/fixed_irradiance` - takes in a speed (`float`) and returns a status code and message indicating whether the speed can be maintained indefinitely with the exercise's solar irradiance or not.
### - `POST /verify/variable_irradiance` - takes in a distance (`float`) and returns a status code and message indicating whether the distance can be covered each day given the exercise's solar irradiance or not.
