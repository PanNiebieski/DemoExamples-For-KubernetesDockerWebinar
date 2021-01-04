
FROM golang:1.13-alpine AS build

#ustawia pracujący folder
WORKDIR /src

COPY main*.go go.* ./


#budujemy aplikacje
RUN CGO_ENABLED=0 go build -o /bin/example2_2

FROM scratch
COPY --from=build /bin/example2_2 /bin/example2_2

EXPOSE 8090

CMD ["/bin/example2_2"]