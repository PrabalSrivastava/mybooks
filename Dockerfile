FROM openjdk:17
EXPOSE 8080
ADD target/backend-*-SNAPSHOT.jar backend-*-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","backend-*-SNAPSHOT.jar"]