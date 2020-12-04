# StudentService
This a simple web application to show a list of students.
A student has three properties: first name, last name, and matriculation number.

## How to run
Run the backend before the frontend.
Preresequite:
- Java
- NodeJs 

### How to run backend
Go to **Backend** directory and use command: <br/>
`./mvnw install` <br/>
Start backend using command: <br/>
`./mvnw spring-boot:run` <br/>
It will start the backend at port 8080 on your localhost. If it is successful running, it will give a list of student as a response when hit a GET request on http://localhost:8080/students <br/>

### How to run frontend
Go to **Frontend** directory and use command: <br/>
`npm install` <br/>
Start frontend using command: <br/>
`npm start` <br/>
It will start the frontend at port 3000 on your localhost and show a list of students.

# Tasks
- Add another student field: **Address**, to store student address.
- Implement student update feature so that you can update any student field from the frontend. 

You can modify the project structure if you want and free to add additional libraries.

## How to submit
Fork this project. Please do not commit just after finishing all the work rather, commit frequently. We would like to see your thought and working process. Once finished, please send us your repository link.
