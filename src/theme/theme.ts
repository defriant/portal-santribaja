import semanticTokens from './semanticTokens'
import heading from './heading'
import colors from './colors'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: colors,
    semanticTokens: semanticTokens,
    components: {
        Heading: heading,
    },
    fonts: {
        heading: '"Poppins", sans-serif',
        body: '"Poppins", sans-serif',
    },
})

export default theme