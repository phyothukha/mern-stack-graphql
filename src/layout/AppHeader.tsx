import { Flex, Text } from '@mantine/core'
import { IconDashboard } from '@tabler/icons-react'

const AppHeader = () => {
    return (
        <>
            <Flex align={'center'} p={10} gap={'xs'} h={'100%'}>
                {/* <IconDash /> */}
                <IconDashboard color="red" />
                <Text size="lg" fw={'bold'} c={'red'}>
                    Dashboard
                </Text>
            </Flex>
        </>
    )
}

export default AppHeader
