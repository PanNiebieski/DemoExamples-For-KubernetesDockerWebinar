#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base
WORKDIR /app
EXPOSE 90
EXPOSE 443
ENV ASPNETCORE_URLS=http://+:90

FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build
WORKDIR /src
COPY ["myaspnetcorefornet5service.csproj", ""]
RUN dotnet restore "./myaspnetcorefornet5service.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "myaspnetcorefornet5service.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "myaspnetcorefornet5service.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "myaspnetcorefornet5service.dll"]