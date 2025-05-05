FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80

# Etapa de construcción
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src

# Copia todo el proyecto
COPY . .

# Restaura dependencias
RUN dotnet restore "./VetImagesService.csproj"

# Publica en /out (más claro)
RUN dotnet publish "./VetImagesService.csproj" -c Release -o /out

# Etapa final
FROM base AS final
WORKDIR /app

# Copia desde la carpeta correcta
COPY --from=build /out .

ENTRYPOINT ["dotnet", "VetImagesService.dll"]
