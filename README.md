# Radix Test (Back-end)

- [Live version (Front-end)](radix-test-front.vercel.app)
- [Frontend Repo](https://github.com/ale-soares/radix-test-front)
- [Live version (Back-end)](radix-test-one.vercel.app)
- [Backend Repo](https://github.com/ale-soares/radix-test)

## Overview 🎯

This repository contains an Express.js API designed for managing sensor data. It provides endpoints to retrieve, add, update, and delete sensor data records stored in a MongoDB database. Additionally, it supports uploading CSV files containing sensor data for bulk insertion.

The API uses Express.js for routing and middleware handling. MongoDB is used as the database with Mongoose for data modeling. Key functionalities include CRUD operations for sensor data and CSV file uploads for bulk data insertion. Error handling and status code responses are implemented to ensure reliability and data integrity.

## Tools 🛠️

- Node
- Express
- TypeScript
- Nodemon
- TS Node
- Mongoose
- Prettier
- ESLint
- Fast CSV
- fs

## Resources 📁

- [How to set up TypeScript with Node.js and Express](https://blog.logrocket.com/how-to-set-up-node-typescript-express/)
- [Setup Node.js Projects with TypeScript, ESLint and Prettier](https://medium.com/@apeview/setup-node-js-projects-with-typescript-eslint-and-prettier-4c1f1fecd107)
- [Express Tutorial: The Local Library website](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)
- [How to Build a Basic Node.js CRUD App with Mongoose and MongoDB](https://medium.com/@skhans/how-to-build-a-basic-node-js-crud-app-with-mongoose-and-mongodb-3e958a36001d)
- [Node.js CRUD Operations Using Mongoose and MongoDB Atlas](https://www.geeksforgeeks.org/node-js-crud-operations-using-mongoose-and-mongodb-atlas/)
- [Folder Structure for NodeJS & ExpressJS project](https://dev.to/mr_ali3n/folder-structure-for-nodejs-expressjs-project-435l)
- [Building a Node.js, Express.js, and MongoDB Template Step by Step](https://medium.com/@smfurquan0712/building-a-node-js-express-js-and-mongodb-template-step-by-step-fbd2ae692adf)
- [Getting random records from MongoDb with Mongoose.js](https://medium.com/@sahinkasap52/getting-random-records-from-mongodb-with-mongoose-js-29a598e8ec24)
- [Typescript With MongoDB and Node/Express](https://medium.com/@haybams/typescript-with-mongoose-and-node-express-24073d51d2ee)
- [Mongoose Node.js Express TypeScript application boilerplate with best practices for API development GitHub Repo](https://github.com/sunnysidelabs/mongoose-express-ts/blob/master/src/models/User.ts)
- [Deploying Express Backend to Vercel](https://medium.com/@ShrianshAgarwal/deploying-express-backend-to-vercel-7664ef880005)
- [Stack Overflow: How do I delete a document in mongoDB using mongoose in Node.js](https://stackoverflow.com/questions/76980190/how-do-i-delete-a-document-in-mongodb-using-mongoose-in-node-js)
- [Mongoose Models Documentation](https://mongoosejs.com/docs/models.html)
- [How to Create an Express POST Upload Endpoint](https://medium.com/@tatianaensslin/creating-an-express-post-upload-endpoint-13225e075d2f)
- [Building a CSV Importer with Node.js](https://reflectoring.io/node-csv-importer/)
- [How To Read and Write CSV Files in Node.js Using Node-CSV](https://www.digitalocean.com/community/tutorials/how-to-read-and-write-csv-files-in-node-js-using-node-csv)
- [Fix "Unexpected field" Error From Multer](https://maximorlov.com/fix-unexpected-field-error-multer/)

## Installing and running 💻

1. Clone repository

`git clone git@github.com:ale-soares/radix-test.git`

2. Ensure MongoDB is running locally or is configured in the environment.

3. Go to project folder and install dependencies

`npm install`

3. Start local server

`npm run start` or `npm run dev`

## Testing 🆘

- API endpoints can be tested using tools like Postman or directly integrated into front-end applications for managing sensor data. The Postman collection use to test endpoints can be found in

`src\testFiles\RadixChallengeAPI.postman_collection.json`

- Update CSV endpoint can be tested with the CSV file provided in

`src\testFiles\testSensorValues.csv`

## Functionalities 🔎

### Controllers

/controllers/sensorData

- getAllSensorData: Retrieves all sensor data entries from the database.
- getSensorData: Retrieves sensor data entries filtered by equipmentId.
- addSensorData: Adds new sensor data entries to the database.
- deleteSensorData: Deletes sensor data entries based on dataId.
- updateSensorData: Updates sensor data entries based on dataId.

/controllers/upload

- uploadFile: Handles CSV file uploads containing sensor data. Parses the CSV, converts data into the appropriate format, and inserts it into the database using SensorData model.

### Models

- SensorData: Represents the MongoDB model schema for sensor data, including fields like equipmentId, timestamp, and value.

### Services

- getAllSensorData: Service function to fetch all sensor data from the database.
- getSensorData: Service function to fetch sensor data filtered by equipmentId from the database.
- uploadFile: Service function to handle CSV file uploads, parse data, and insert into the database.

## Next Steps 📝

These points aim to enhance the functionality, usability, performance, and maintainability of the sensor data management application. Each idea can be expanded upon based on specific project requirements and user needs.

- Add sorting and filtering options for sensor data based on different parameters (e.g., timestamp, value).
- Enhance error handling to provide more informative messages or retry mechanisms for failed data fetch operations.
- Integrate real-time updates using WebSocket or server-sent events (SSE) to reflect changes in sensor data without manual refresh.
- Implement authentication and authorization mechanisms to secure access to sensitive sensor data.
- Enhance UI/UX with data visualization enhancements, such as interactive charts with zoom and pan functionalities.
- Develop a dashboard view to display multiple sensors' data simultaneously, allowing users to compare trends and anomalies.
- Enable data export functionalities, allowing users to download sensor data in CSV or Excel formats.
- Improve performance optimizations, such as memoization of fetched data or lazy loading of components.
- Implement unit tests and integration tests to ensure reliability and maintainability of the application.
- Explore accessibility improvements.
- Add validation middleware to ensure data integrity and format correctness.
- Optimize database queries for improved performance, especially with large datasets.
- Implement API documentation using tools like Swagger for easier integration and understanding.

<hr>
<p>Made with ❤️ by me</p>
