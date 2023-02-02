import AlbumItem from './AlbumItem'
import { format } from 'date-fns'
import { Wrapper } from '../../../components'
import { Grid, Heading, Stack, Text } from '@chakra-ui/react'
import HomeLinks from './HomeLinks'
import ROUTE_URL from '../../../router/urlRouter'

interface IAlbum {
    data: any
}

const Album = (props: IAlbum) => {
    const { data } = props

    return (
        <Wrapper>
            <Stack spacing='2rem'>
                <Heading fontFamily='Poppins' color='primary.50' textAlign='left'>Album</Heading>
                {data?.description !== '' && <Text>{data.description}</Text>}
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                        lg: 'repeat(4, 1fr)',
                    }}
                    gap='20px'
                    width='100%'
                >
                    {data?.data?.map((album: any, index: number) => {
                        return <AlbumItem
                            key={index}
                            image={album.image}
                            date={format(new Date(album.created_at), 'dd MMMM yyyy')} title={album.caption}
                            isEllipsis={true}
                        />
                    })}
                </Grid>
                <HomeLinks to={ROUTE_URL.ALBUM} text='Lihat selengkapnya' />
            </Stack>
        </Wrapper>
    )
}

export default Album