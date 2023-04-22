# My Wallet API

## About

My Wallet API is a financial management tool developed with Node.js and MongoDB. It enables users to monitor their income and expenses by recording the name and amount of each transaction. The API features a registration and login process, and users must provide a token to access their transaction history, which ensures the privacy and security of their data. Only the user who created a transaction can view it, and the API restricts access to anyone else.

## Technologies

<p align='center'>
<img style='margin: 2px;' src='https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white'/>
<img style='margin: 2px;' src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black'/>
<img style='margin: 2px;' src='https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB'/>
<img style='margin: 2px;' src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white'>
<img style='margin: 2px; width:70px' src='https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white/'>
</p>

## Routes

#### <span style='font-weight:bold;'>POST</span> /signUp

A route register a new user. If there's a participant with this e-mail already registered, it'll return a 409 status code error. If its sucessfull you'll get a 201 status code. The request body should be:

```
{
  {
  "name": "johnDoe",
  "email": "john@doe.com",
  "password": "123456"
}
}
```

#### <span style='font-weight:bold;'>POST</span> /signIn

A route that will allow the user to logIn, if there's no user with the given e-mail registered it'll return a 404 status code error, if the password doesn't match with the ones given on signUp, it'll return a 401 status code error. It'll give a token as a response.

All routes after signIn will need an authentication token:
```
headers: { Authorization: `Bearer ${token}` }
```

#### <span style='font-weight:bold;'>POST</span> /transactions

A request to create a new expense or incoming. All the fields are required and can't be empty. The token should come as a header. If any of the fields are missing or empty, the API will respond with a 422 status code and an error message indicating that all the fields are required and shouldn't be empty. It'll return a 401 status code if the token doesn't exist or if there's no account with this token.

```
The request body should be:
    {
        {
        "description": "salario",
        "amount": 1200
        }
    }
    In case its a number like 1200, which means: it ends with two zeroes, don't put a dot between, otherwise it'll look like this: "amount": 1.2, it'll work if the number only has one zero or if its a floating number. (like 275.5)
```

#### <span style='font-weight:bold;'>GET</span> /transactions

A request that will retrieve a list of this users expense or incoming in the chat. If there are no financial information, it'll return an empty array. The response will come like this:

```
The date format is: (DD/MM)
[
    {
        "_id": "644438f94af2cf105bd042b5",
        "userId": "64443438f3722b44d6394f74",
        "description": "salario",
        "type": "entrada",
        "amount": 1200.89,
        "date": "21/04"
    },
    {
        "_id": "644439144af2cf105bd042b6",
        "userId": "64443438f3722b44d6394f74",
        "description": "conta de luz",
        "type": "saida",
        "amount": 170.5,
        "date": "22/04"
    }
]
```

## How to run

To run this project, you'll have to install MongoDB to acess the database.

1. Clone this repository
2. Install the dependencies

```
npm i
```

3. Create a **.env** file in the root directory of the project and add the necessary environment variables. This file should not be committed to GitHub for security reasons. It should look like this:

```
DATABASE_URL=mongodb://localhost:27017/MyWallet
```

4. Run the back-end with

```
npm start
```

4. Access http://localhost:5000 on your browser to run the API.
