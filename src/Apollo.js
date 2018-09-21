import Vue from 'vue'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

import context from 'apollo-link-context'
import localStorage from 'vue-local-storage'

Vue.use(VueApollo)

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'https://api.github.com/graphql'
})

const authLink = context((_, {headers}) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
})

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient(apolloClient)

})

export default apolloProvider
