# graphql-tutorial-1
GraphQL Tutorial 1

## Docker
### Build the Docker Container
```
docker build -t node-graphql-1 .
```

### Let's run it!
```
docker run -p 49160:8080 node-graphql-1
```

## NodeJS (installed locally)

### Install packages
```
yarn install
```

### Run the server
```
node src/index.js
```

Now, go to the following URL in your browser

```
http://localhost:49160/graphiql
```