<div align="center" >
  <img width="150px" src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4b0.svg" alt="wallet-logo" width="400">
  <br>
  <br>
  <h1>Wallet Cash - Frontend</h1>
</div>

## 📝 Description


wallet.cash is a private web wallet application that allows users to, create an account and make transactions between themselves

## 🚀 Technologies and Libraries

- [Next](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-components](https://styled-components.com/)
- [Axios](https://axios-http.com/)
- [Dayjs](https://day.js.org/)
- [Reack-hook-form](https://react-hook-form.com/)
- [Joi](https://joi.dev/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## 📦 Installation

Clone the repository.

```bash
# https
$ git clone https://github.com/frreiro/wallet-cash-frontend
# ssh
$ git clone git@github.com:frreiro/wallet-cash-frontend.git
```

Install the dependencies.

```bash
$ cd wallet-cash-frontend && npm install
#or
$ cd wallet-cash-frontend &&  yarn
```

## 🚀 Usage

This project in local mode need the backend up to work, it will use the following url
 - http://localhost:3000 -> where the frontend will be up
 - http://localhost:5000 -> backend on, used for requests

[Link for backend here](https://github.com/frreiro/wallet-cash-backend) 

### Development mode

```bash
$ npm run dev
#or
$ yarn run dev
```

### Docker mode

Docker is configured to use your machine localhost as the container localhost. This option was choosed because the backend is not deployed yet, so this way was the pratice way to solve networking issues. Knowing that, to run docker just use those following command:

```bash
$ npm run docker:start
#or
$ yarn run docker:start
```
## 📌 Features

- [x] User signup
- [x] User login
- [x] Create a user transfer
- [x] Read the user transactions
- [x] Read the user account information (balance, username)

## 🎨 Screenshots

<p align="center">
    <img height='400px' src="https://user-images.githubusercontent.com/98192816/203184773-ab7796fa-6713-4af2-b5fc-7d5235c27fff.png">
    <img height='400px'src="https://user-images.githubusercontent.com/98192816/203184926-119ddda9-043f-422c-9fa6-a6f45932bc01.png">
    <img height='400px'src="https://user-images.githubusercontent.com/98192816/203185090-b3358dea-dd7e-4dc7-8579-5ad9ad23cdef.png">
    <img height='400px'src="https://user-images.githubusercontent.com/98192816/203184942-a24e03a7-67d7-4e64-8472-d258d4b1f17a.png">
</p><br>

