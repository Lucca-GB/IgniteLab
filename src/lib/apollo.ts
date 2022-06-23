import { ApolloClient, InMemoryCache } from "@apollo/client";

//usamos o apollo como protocolo de comunicação com o graphql
export const client = new ApolloClient({
        uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ohlbxa033001ywa7hifjqm/master',
        cache: new InMemoryCache()
})