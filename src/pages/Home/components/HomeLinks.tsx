import { Link as ReactLink } from 'react-router-dom'
import {
    Divider,
    Link,
    Stack,
    Text,
    Icon
} from '@chakra-ui/react'
import { IoChevronForwardCircleOutline } from 'react-icons/io5'

interface IHomeLink {
    to: any,
    text: String
}

function HomeLinks(props: IHomeLink) {
    const { to, text } = props

    return (
        <Stack
            w='100%'
            h='100%'
            justify='center'
            align='center'
            spacing='2rem'
        >
            <Link
                as={ReactLink}
                to={to}
                fontFamily='Poppins'
                color='primary.70'
                textAlign='center'
                fontWeight='semibold'
                cursor='pointer'
                _hover={{
                    borderBottom: 'none'
                }}
                display='flex'
                alignItems='center'
                gap='.75rem'
            >
                <Text>{text}</Text>
                <Icon
                    as={IoChevronForwardCircleOutline}
                    fontSize='1.75rem'
                />
            </Link>
            <Divider
                w='275px'
                border='2px'
                opacity='1'
            />
        </Stack>
    )
}

export default HomeLinks