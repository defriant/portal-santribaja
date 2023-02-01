import React from 'react'
import AricleItem from './AricleItem'
import { Wrapper } from '../../../components'
import { Grid, Heading, Text } from '@chakra-ui/react'

interface IArticle {
    data: any
}

const Article = (props: IArticle) => {
    const { data } = props

    return (
        <Wrapper>
            <Heading fontFamily='Poppins' color='primary.50' textAlign='center'>Article</Heading>
            <Grid 
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(2, 1fr)',
                }} 
                paddingY='25px' 
                gap='20px'
            >
                {data?.map((article: any, index: number) => {
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
                View All
            </Text>
        </Wrapper>
    )
}

export default Article