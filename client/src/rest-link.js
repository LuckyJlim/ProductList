import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import { onError } from '@apollo/client/link/error';
import mapKeys from 'lodash/mapKeys';
import camelCase from 'lodash/camelCase';

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

const restLink = new RestLink({
  uri: '/api',
  typePatcher: {
    ProductPayload: data => {
      if (data.results) {
        data.results = data.results.map(product => ({
          __typename: 'Product',
          ...product,
        }));
      }
      return data;
    },
  },
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([errorLink, restLink]),
});
