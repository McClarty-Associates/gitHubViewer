import Vue from 'vue'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

Vue.use(VueApollo)

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'https://api.github.com/graphql'
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient(apolloClient)

})

export default apolloProvider
