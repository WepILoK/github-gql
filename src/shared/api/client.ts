import {ApolloClient, createHttpLink, DefaultOptions, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, {headers}) => {
    return {
        headers: {
            ...headers,
            authorization: import.meta.env.VITE_GITHUB_TOKEN ? `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}` : "",
        }
    }
});

const defaultOptions: DefaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
}

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,

});