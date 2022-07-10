
## Installation

```bash
$ npm install
```

## Running micro-services, then
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test graphql

go to http://localhost:3000/graphql and run script:

### User register

```typescript
mutation {
  registerUser (
    createUserData: {
    	firstName: "FirsName",
    	lastName: "LastName",
    	password: "pass1234Nv#",
    	email: "mawrt9@mail.ru",
    }
  ) {
    id
    firstName
    lastName
    email
    password
  }
}
```

### User login

```typescript
query {
  jwt(
    email: "mail1243@mail.ru"
    password: "pass1234N*"
  ) {
    jwt
  }
}
```

```typescript

