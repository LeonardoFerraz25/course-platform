import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8ed2w14ox01z791p2eos6/master',
  cache: new InMemoryCache()
})