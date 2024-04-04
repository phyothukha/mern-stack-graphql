import { AppShell, Burger, Group, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import AppHeader from './AppHeader'
// import { MantineLogo } from '@mantinex/mantine-logo'

export default function App() {
    const [opened, { toggle }] = useDisclosure()

    return (
        <AppShell
            layout="alt"
            header={{ height: 60 }}
            footer={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            aside={{
                width: 300,
                breakpoint: 'md',
                collapsed: { desktop: false, mobile: true },
            }}
            padding="md"
        >
            <AppShell.Header>
                {/* <Group h="100%" px="md">
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                </Group> */}
                <AppHeader />
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <Group>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                    <Text>Navbar</Text>
                </Group>
            </AppShell.Navbar>
            <AppShell.Main>
                Alt layout and Aside are rendered on top on Header and Footer
            </AppShell.Main>
        </AppShell>
    )
}
