FROM alpine:latest
RUN apk add --no-cache ca-certificates
COPY rover_sim /usr/local/bin/rover_sim
CMD ["rover_sim"]
