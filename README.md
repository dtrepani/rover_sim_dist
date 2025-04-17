# Rover Sim

### Notes
I was not able to figure out how to solve the math problems themselves, but I've added what I did know to the best of my ability.

---

### Prerequisites
To complete these exercises you will need:
- Your preferred language toolchain
- Docker: <https://www.docker.com/get-started> - _Note that docker (or any of the alternatives) will require WSL2 on Windows operating systems._
    - You may also use one of these open-source alternatives if you prefer
        - Rancher Desktop: <https://rancherdesktop.io/>
        - _Note: Podman is technically an option but is a pain to set up with docker-compose, which is used later on._
- GitHub Account: <https://github.com/signup>
- VS Code (or any other code editor you prefer) <https://code.visualstudio.com/download>
- An API Explorer (Optional but recommended)
    - Bruno: <https://www.usebruno.com/>
    - Postman: <https://www.postman.com/downloads/>
    - Insomnia: <https://insomnia.rest/download>


### Startup
Clone this repository to your local machine.

Run `docker-compose up -d` in the root of the project to start the Rover Sim.

To test if the server is running, open your browser and navigate to `http://localhost:8080/health`. You should see a JSON response with the following content:
```json
{
    "status": "Ok"
}
```

If you see this response, the server is running and you can begin the [exercises](./docs/exercises.md)!

### Shutdown
To stop the server, run `docker-compose down` in the root of the project.
