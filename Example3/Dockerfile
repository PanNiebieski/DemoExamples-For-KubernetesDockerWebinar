FROM mcr.microsoft.com/dotnet/aspnet:3.1

#FROM mcr.microsoft.com/dotnet/core/aspnet:5.0

COPY bin/Release/netcoreapp3.1/publish/ App/
WORKDIR /App
ENTRYPOINT ["dotnet", "NetCore.DockerTest.dll"]

