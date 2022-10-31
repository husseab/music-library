# Music library

This is a music library app desgined to store artist records and associated albums in a database.


## Dependencies used

  - "express": "^4.18.2",
  - "mysql2": "^2.3.3"

### DevDependencies used

    "chai": "^4.3.6",
    "dotenv": "^16.0.3",
    "eslint": "^8.25.0",
    "eslint-config-standard": "^17.0.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-n": "^15.3.0",
    "eslint-plugin-promise": "^6.0.1",
    "eslint-plugin-react": "^7.31.10",
    "mocha": "^10.0.0",
    "nodemon": "^2.0.20",
    "supertest": "^6.3.0"

## Running the app

This app requires a MySQL database. Run



```console
$ npm i -S mysql2
```



in your terminal.

Run 


```console
$ npm i
```


to install dependencies.

Create .env:

```console
DB_PASSWORD=password
DB_NAME=music_LIBRARY_DEV
DB_USER=root
DB_HOST=localhost
DB_PORT=3307
PORT=3000
```

and .env.test files in the root directory:

```console
DB_PASSWORD=password
DB_NAME=music_LIBRARY_TEST
DB_USER=root
DB_HOST=localhost
DB_PORT=3307
PORT=3000
```


Set up docker container with 

```console
docker run -d -p 3307:3306 --name music_library_mysql -e MYSQL_ROOT_PASSWORD=password mysql

```

Download the following dependencies: 

```console
$ npx eslint --init
$ npx prettier --write .
$ npm i -S express
$ npm i -D nodemon
$ npm i -D dotenv
$ npm i -S mysql2
$ npm i -D mocha chai supertest
```

## Using the app

To start the app on your localhost use 
```console
$ npm start 
```


