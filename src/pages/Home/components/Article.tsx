import AricleItem from './AricleItem'
import { Wrapper } from '../../../components'
import { Grid, Heading, Stack, Text } from '@chakra-ui/react'
import ROUTE_URL from '../../../router/urlRouter'
import HomeLinks from './HomeLinks'

interface IArticle {
    data: any
}

const Article = (props: IArticle) => {
    const { data } = props

    return (
        <Wrapper>
            <Stack spacing='2rem'>
                <Heading fontFamily='Poppins' color='primary.50' textAlign='left'>Artikel</Heading>
                {data?.description !== '' && <Text>{data.description}</Text>}
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        md: 'repeat(2, 1fr)'
                    }}
                    gap='20px'
                >
                    {data?.data?.map((article: any, index: number) => {
                        return <AricleItem key={index} image={article.image} content={article.description} id={article?.id} />
                    })}
                </Grid>
                <HomeLinks to={ROUTE_URL.ARTICLE} text='Lihat selengkapnya' />
            </Stack>
        </Wrapper>
    )
}

export default Article