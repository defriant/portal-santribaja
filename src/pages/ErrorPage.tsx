import { Divider, Flex, Text } from '@chakra-ui/react'
import Head from '../components/Head'

interface iErrorPage {
    code: number,
    message: string
}

function ErrorPage(props: iErrorPage) {
    const { code, message } = props

    return (
        <>
            <Head title={process.env.REACT_APP_NAME} />
            <Flex
                w='100%'
                h='100vh'
                justify='center'
                align='center'
                gap='1.5rem'
                bg='chakra-body-bg-secondary'
            >
                <Text
                    fontSize='26px'
                    fontWeight='light'
                    letterSpacing='2px'
                >
                    {code}
                </Text>
                <Divider
                    orientation='vertical'
                    maxH='40px'
                    borderColor='var(--chakra-colors-chakra-body-text)'
                />
                <Text
                    fontSize='24px'
                    fontWeight='light'
                    letterSpacing='2px'
                >
                    {message}
                </Text>
            </Flex>
        </>
    )
}

export default ErrorPage
