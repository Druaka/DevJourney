To integrate GraphQL into your Angular front-end, Node.js Express backend, and MongoDB backend while leveraging batching, caching, pagination, and filtering, you can follow these steps:

### Step 1: Set Up Apollo Client in Angular

1. **Install Apollo Client**:
   ```bash
   npm install @apollo/client graphql
   ```

2. **Configure Apollo Client**:
   Create an `ApolloClient` instance in your Angular application:
   ```typescript
   import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

   const client = new ApolloClient({
     uri: 'https://api.tcgdex.net/v2/graphql',
     cache: new InMemoryCache(),
   });

   export default client;
   ```

3. **Use Apollo Client in Components**:
   Use the Apollo Client to fetch data in your Angular components:
   ```typescript
   import { useQuery, gql } from '@apollo/client';

   const GET_CARDS = gql`
     query {
       cards {
         name
         set
         rarity
       }
     }
   `;

   function CardsComponent() {
     const { loading, error, data } = useQuery(GET_CARDS);

     if (loading) return <p>Loading...</p>;
     if (error) return <p>Error: {error.message}</p>;

     return (
       <div>
         {data.cards.map(card => (
           <div key={card.name}>
             <h3>{card.name}</h3>
             <p>{card.set}</p>
             <p>{card.rarity}</p>
           </div>
         ))}
       </div>
     );
   }
   ```

### Step 2: Set Up Apollo Server in Node.js Express

1. **Install Apollo Server**:
   ```bash
   npm install apollo-server-express graphql
   ```

2. **Configure Apollo Server**:
   Set up Apollo Server in your Express application:
   ```javascript
   const { ApolloServer, gql } = require('apollo-server-express');
   const express = require('express');
   const { MongoClient } = require('mongodb');

   const typeDefs = gql`
     type Card {
       name: String
       set: String
       rarity: String
     }

     type Query {
       cards: [Card]
     }
   `;

   const resolvers = {
     Query: {
       cards: async () => {
         const client = await MongoClient.connect('mongodb://localhost:27017');
         const db = client.db('tcg');
         return db.collection('cards').find().toArray();
       },
     },
   };

   const server = new ApolloServer({ typeDefs, resolvers });

   const app = express();
   server.applyMiddleware({ app });

   app.listen({ port: 4000 }, () =>
     console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
   );
   ```

### Step 3: Implement Batching and Caching

1. **Batching**:
   Use Apollo Client's built-in batching capabilities:
   ```typescript
   const client = new ApolloClient({
     uri: 'https://api.tcgdex.net/v2/graphql',
     cache: new InMemoryCache(),
     link: ApolloLink.from([
       new BatchHttpLink({ uri: 'https://api.tcgdex.net/v2/graphql' }),
     ]),
   });
   ```

2. **Caching**:
   Configure caching with `InMemoryCache`:
   ```typescript
   const client = new ApolloClient({
     uri: 'https://api.tcgdex.net/v2/graphql',
     cache: new InMemoryCache({
       typePolicies: {
         Query: {
           fields: {
             cards: {
               merge(existing, incoming) {
                 return { ...existing, ...incoming };
               },
             },
           },
         },
       },
     }),
   });
   ```

### Step 4: Implement Pagination and Filtering

1. **Pagination**:
   Use Apollo Client's pagination capabilities:
   ```typescript
   const GET_CARDS = gql`
     query GetCards($offset: Int, $limit: Int) {
       cards(offset: $offset, limit: $limit) {
         name
         set
         rarity
       }
     }
   `;

   function CardsComponent() {
     const { loading, error, data, fetchMore } = useQuery(GET_CARDS, {
       variables: { offset: 0, limit: 10 },
     });

     const loadMore = () => {
       fetchMore({
         variables: {
           offset: data.cards.length,
         },
       });
     };

     if (loading) return <p>Loading...</p>;
     if (error) return <p>Error: {error.message}</p>;

     return (
       <div>
         {data.cards.map(card => (
           <div key={card.name}>
             <h3>{card.name}</h3>
             <p>{card.set}</p>
             <p>{card.rarity}</p>
           </div>
         ))}
         <button onClick={loadMore}>Load More</button>
       </div>
     );
   }
   ```

2. **Filtering**:
   Implement filtering in your queries:
   ```typescript
   const GET_FILTERED_CARDS = gql`
     query GetFilteredCards($rarity: String) {
       cards(rarity: $rarity) {
         name
         set
         rarity
       }
     }
   `;

   function FilteredCardsComponent({ rarity }) {
     const { loading, error, data } = useQuery(GET_FILTERED_CARDS, {
       variables: { rarity },
     });

     if (loading) return <p>Loading...</p>;
     if (error) return <p>Error: {error.message}</p>;

     return (
       <div>
         {data.cards.map(card => (
           <div key={card.name}>
             <h3>{card.name}</h3>
             <p>{card.set}</p>
             <p>{card.rarity}</p>
           </div>
         ))}
       </div>
     );
   }
   ```

### Conclusion

By following these steps, you can integrate GraphQL into your Angular front-end, Node.js Express backend, and MongoDB backend while leveraging batching, caching, pagination, and filtering. This setup will help you efficiently manage large datasets and improve the performance of your application.

If you have any more questions or need further assistance, feel free to ask! 😊
