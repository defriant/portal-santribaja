import React from 'react'
import AricleItem from './AricleItem'
import { Wrapper } from '../../../components'
import { Flex, Grid, Heading, Stack, Text } from '@chakra-ui/react'

interface IArticle {
    data: any
}

const Article = (props: IArticle) => {
    const { data } = props

    return (
        <Wrapper>
            <Stack spacing='1.5rem'>
                <Heading fontFamily='Poppins' color='primary.50' textAlign='center'>Artikel</Heading>
                <Text color='gray.600'>{data.description}</Text>
                <Grid 
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(2, 1fr)',
                    }}  
                    gap='20px'
                >
                    {data?.data?.map((article: any, index: number) => {
                        return <AricleItem key={index} image={article.image} content={article.description} id={article?.id} />
                    })}
                </Grid>
                <Text 
                    fontFamily='Poppins' 
                    color='primary.50' 
                    textAlign='center'
                    fontWeight='semibold'
                    cursor='pointer'
                >
                    Lihat lebih lanjut
                </Text>
            </Stack>
        </Wrapper>
    )
}

export default Article