import React from 'react'
import { Container } from '@chakra-ui/react'

const Wrapper = (props: any) => {
    return (
        <Container 
            maxW='container.xl' 
            paddingY='50px' 
        >
            {props?.children}
        </Container>
    )
}

export default Wrapper