FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base
WORKDIR /app
EXPOSE 5555
EXPOSE 443
ENV ASPNETCORE_URLS=http://+:5555

FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build
WORKDIR /src
COPY ["aspnet-core-secrets.csproj", ""]
RUN dotnet restore "./aspnet-core-secrets.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "aspnet-core-secrets.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "aspnet-core-secrets.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "aspnet-core-secrets.dll"]