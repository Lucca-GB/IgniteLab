import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
        uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ohlbxa033001ywa7hifjqm/master',
        cache: new InMemoryCache()
})