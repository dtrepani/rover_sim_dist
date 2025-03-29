# Rover Sim

### Prerequisites
To complete these exercises you will need:
- Rust: <https://www.rust-lang.org/tools/install>
- Docker: <https://www.docker.com/get-started>
    - You may also use one of these open-source alternatives if you prefer
        - Podman: <https://podman.io/docs/installation>
        - Rancher Desktop: <https://rancherdesktop.io/>
- GitHub Account: <https://github.com/signup>
- VS Code (or any other code editor you prefer) <https://code.visualstudio.com/download>
- An API Explorer
    - Bruno: <https://www.usebruno.com/>
    - Postman: <https://www.postman.com/downloads/>
    - Insomnia: <https://insomnia.rest/download>


### Startup
Fork this repository and clone it to your local machine.

Run `docker-compose up -d` in the root of the project to start the Rover Sim.

To test if the server is running, open your browser and navigate to `http://localhost:8080/health`. You should see a JSON response with the following content:
```json
{
    "status": "ok"
}
```

If you see this response, the server is running and you can begin the [exercises](./docs/exercises)!

### Shutdown
To stop the server, run `docker-compose down` in the root of the project.
