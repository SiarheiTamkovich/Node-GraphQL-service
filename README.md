
## Installation

```bash
$ npm install
```

### Running micro-services, then
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test graphql

go to http://localhost:3000/graphql and run script(sample code):

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

### Creating record

```typescript
mutation {
  createArtist (
    createArtistData: {
      firstName: "First Name",
      secondName: "Second Name",
      birthDate: "04/07/1985",
      birthPlace: "birth place",
      country: "Country",     
      instruments: "instruments",
    }
  ) {
    id
    firstName
    secondName
    birthDate
    birthPlace
    bands {
      id
      website
    }
    country
    instruments
  }
}
```
#### With header
```typescript
{
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM3NWFmNTFjODQxNDc1ZWJmM2RiMzAiLCJmaXJzdE5hbWUiOiJGaXJzTmFtZSIsImxhc3ROYW1lIjoiTGFzdE5hbWUiLCJlbWFpbCI6Im1haWwxMjQzQG1haWwucnUiLCJpYXQiOjE2NTcyMzUyMzF9.1VW_UqnUUyLFdjtHF01pg2sRPqSMShKSaMyqR1iqTBo"
}
```
### Delete record
```typescript
mutation {
    deleteArtist(id: "62cab81baffc051bd24f1736")
    {
      id
    }
  }
```
### Update record
```typescript
mutation {
  updateArtist (
    updateArtistData: {
      id: "62cb00acaffc051bd24f177d"
      firstName: "New First Name",
      secondName: "New Second Name",
      birthDate: "01/01/2001",
      birthPlace: "New birth place",
      country: "New Country",  
      instruments: ["instruments", "NewInstruments"]
    }) {
    firstName
    secondName
    birthDate
    birthPlace
    country
    instruments
  }
}
```
### Get record
```typescript
query {
  artist (
    id: "62cabb02affc051bd24f173a"    
  ) {
    firstName
    secondName
    birthDate
    birthPlace
    bands {
      name
    }
    country
    instruments
  }
}
```
### Get all records
```typescript
query {
  artists {
    firstName
    secondName
    birthDate
    birthPlace
    bands {
      name
    }
    country
    instruments
  }
}
```
