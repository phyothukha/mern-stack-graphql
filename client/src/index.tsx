import Router from './router'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://spacex-production.up.railway.app/',
    cache: new InMemoryCache(),
})

const App = () => {
    return (
        <ApolloProvider client={client}>
            <MantineProvider defaultColorScheme="dark">
                <Router />
            </MantineProvider>
        </ApolloProvider>
    )
}

export default App
