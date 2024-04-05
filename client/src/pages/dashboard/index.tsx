import { useQuery } from '@apollo/client'
import { gql } from '@/__generated__'
import { Button, Container, Text } from '@mantine/core'

const GET_EXAMPLE = gql(`
query ExampleQuery {
    company {
      ceo
      headquarters {
        address
      }
    }
    roadster {
      apoapsis_au
    }
  }
  
`)

const Dashboard = () => {
    const { loading, error, data } = useQuery(GET_EXAMPLE)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    console.log(data)

    return (
        <Container p={3}>
            <Text size="lg">Hello dashboard</Text>
            <p>{data?.company?.ceo}</p>
            <p>{data?.company?.headquarters?.address}</p>
            <Button>Click</Button>
        </Container>
    )
}

export default Dashboard
