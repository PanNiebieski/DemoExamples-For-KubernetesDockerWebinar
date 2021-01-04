
FROM golang:latest

#ustawia pracujący folder
WORKDIR /example2

#kopiuje to pliki na kontener
ADD . .

#budujemy aplikacje
RUN go build -o main .

EXPOSE 8090

CMD ["/example2/main"]