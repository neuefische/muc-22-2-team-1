FROM openjdk:19

ENV ENVIROMENT=prod

MAINTAINER Licet Ullmann <licet.rosales@outlook.com>
MAINTAINER Johanna Chiabotto <johanna.chiabotto@gmail.com>

EXPOSE 8080

ADD backend/target/backend-0.0.1-SNAPSHOT.jar app.jar

CMD [ "sh", "-c", "java -jar /app.jar"]

