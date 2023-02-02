import { Stack, Text, Icon } from "@chakra-ui/react"
import { FaInfoCircle } from "react-icons/fa"

function EmptyPage() {
    return (
        <Stack
            justify='center'
            w='100%'
            h='50vh'
            align='center'
            gap='1rem'
            fontStyle='italic'
            opacity='.5'
        >
            <Icon
                as={FaInfoCircle}
                fontSize='40px'
            />
            <Text fontWeight='semibold'>Data di halaman ini masih kosong.</Text>
        </Stack>
    )
}

export default EmptyPage