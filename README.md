# Instawork

### Installation

npm install express --save
npm install body-parser --save

npm install --save-dev nodemon
npm i dotenv
npm i Sequelize
npm i mysql2 uuidv4

node app or else nodemon app

### Endpoints
# 1. create a member: (Post) http://localhost:3000/team
 json: {
    "first_name":"ankita",
    "last_name":"jha",
    "phoneNumber":"12345678",
    "email":"ankitajha2349@gmail.com",
    "role":"admin"
}
#2. Get all members : (GET) http://localhost:3000/team
#3. Update (PUT) : http://localhost:3000/team/b471590d-62f5-4fd4-9fb2-88ffec4db096 
(pass id) 
#4. Delete (Delete) : http://localhost:3000/team/b471590d-62f5-4fd4-9fb2-88ffec4db096
