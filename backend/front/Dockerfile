# Utiliser une image Maven avec OpenJDK 17 pour construire l'application
FROM maven:3.8.3-openjdk-17 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier POM et les sources
COPY pom.xml .
COPY src /app/src

# Construire le projet
RUN mvn clean package -DskipTests

# Utiliser une image Java pour exécuter l'application
FROM openjdk:17-slim
COPY --from=build /app/target/fullstack-project-0.0.1-SNAPSHOT.jar /app/fullstack-project.jar
ENTRYPOINT ["java", "-jar", "/app/fullstack-project.jar"]


