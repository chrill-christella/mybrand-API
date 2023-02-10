# Badges

![check-code-coverage](https://img.shields.io/badge/code--coverage-72.34%25-green)

# My Brand Api

## Description

a REST-API for my brand(personal website)

### API ENDPOINTS

#### Users

| HTTP Request | Endpoint           | Description  |
| :----------- | :----------------- | :----------- |
| `POST`       | `/api/user/signin` | Admin signin |

#### Article

| HTTP Request | Endpoint                        | Description                           |
| :----------- | :------------------------------ | :------------------------------------ |
| `GET`        | `/api/article/`                 | Used to get all the article available |
| `POST`       | `/api/article`                  | Used to create a new blog             |
| `GET`        | `/api/article/getOneArticle/id` | Used to get a single blog             |
| `PUT`        | `/api/article/update/id`        | Used to update a blog                 |
| `DELETE`     | `/api/article/id`               | Used to delete a blog                 |

#### Message

| HTTP Request | Endpoint                      | Description                       |
| :----------- | :---------------------------- | :-------------------------------- |
| `GET`        | `/api/userMessages`           | Used to get all the messages sent |
| `POST`       | `/api/userMessages/`          | Used to send message              |
| `GET`        | `/api/userMessages/getOne/id` | Used to get a single blog         |
| `DELETE`     | `/api/userMessages/id`        | Used to delete a message          |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASEURL`

`DATABASEURL_TEST`

`JWT_SECRETE`

`CLOUDINARY_URL`

## Installation

- Clone this repository or download it.
- Run "npm install" in your terminal
- Run "npm start" to run server

## Used Technologies

### Build With

- [NodeJs](https://nodejs.org/en/)
- [Express](https://expressjs.com/)

### Tested With

- [Mocha](https://mocha.io/)

### Deployed

- [render](https://www.render.com/)

## Author

- [Christella UFITEYEZU](https://github.com//)
