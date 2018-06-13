var express = require('express');
var bodyParser = require('body-parser');
var { makeExecutableSchema } = require('graphql-tools');
var { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`
const resolvers = {
    Query: {
        hello: (_, { name }) => `Hello ${name || 'World'}`,
    },
}

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

const PORT = 8080;
const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

app.listen(PORT);
console.log(`Running a GraphQL API server at localhost:${ PORT }/graphql`);