import express from 'express'
import bodyParser from 'body-parser'
import { makeExecutableSchema } from 'graphql-tools'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

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
})

const PORT = 8080
const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema }))
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT)
console.log(`Running a GraphQL API server at localhost:${ PORT }/graphql`)