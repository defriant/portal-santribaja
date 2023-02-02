import React from 'react'
import AricleItem from '../Home/components/AricleItem'
import SkeletonAricleItem from '../../components/SkeletonArticleItem/SkeletonArticleItem'
import { Wrapper } from '../../components'
import { useQuery } from 'react-query'
import { getArticlesApi } from '../../api/request/article'
import { Flex, Grid, Heading, Text, useToast } from '@chakra-ui/react'
import { getHomeDataApi } from '../../api/request/home'
import Head from '../../components/Head'

const Article = () => {
    const toast = useToast()

    const articles = useQuery('get-article', () => getArticlesApi(), {
        onError: (resp: any) => {
            toast({
                status: 'error',
                description: resp?.message ?? resp,
                position: 'top-right',
                isClosable: false,
                duration: 3000
            })
        }
    })

    const homeData = useQuery('get-home-data', () => getHomeDataApi(), {
        onError: (resp: any) => {
            toast({
                status: 'error',
                description: resp?.message ?? resp,
                position: 'top-right',
                isClosable: false,
                duration: 3000
            })
        }
    })

    return (
        <>
            <Head title='Artikel' />
            <Wrapper>
                <Flex direction='column' minHeight='calc(100vh - 117px)'>
                    <Heading
                        color='primary'
                        textAlign='center'
                        marginBottom='15px'
                    >
                        Artikel
                    </Heading>
                    {homeData?.data?.data?.sections?.find((article: any) => article?.type === 'article')?.description !== '' &&
                        <Text>{homeData?.data?.data?.sections?.find((article: any) => article?.type === 'article')?.description}</Text>
                    }
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
                        {articles?.isLoading && [...Array(4)]?.map((_, index) => {
                            return <SkeletonAricleItem key={index} />
                        })}

                        {articles?.data?.data?.map((article: any, index: number) => {
                            return <AricleItem key={index} image={article.image} content={article.description} id={article?.id} />
                        })}
                    </Grid>
                </Flex>
            </Wrapper>
        </>
    )
}

export default Article