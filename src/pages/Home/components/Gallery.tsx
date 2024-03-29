import GalleryItem from './GalleryItem'
import { Wrapper } from '../../../components'
import {
    Grid,
    Heading,
    Stack,
    Text,
} from '@chakra-ui/react'
import ROUTE_URL from '../../../router/urlRouter'
import HomeLinks from './HomeLinks'

interface IGallery {
    data: any
}

const Gallery = (props: IGallery) => {
    const { data } = props

    return (
        <Wrapper>
            <Stack spacing='2rem'>
                <Heading fontFamily='Poppins' color='primary.50' textAlign='left'>Galeri</Heading>
                {data?.description !== '' && <Text color='gray.600'>{data.description}</Text>}
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        lg: 'repeat(3, 1fr)',
                    }}
                    gap='20px'
                >
                    {data?.data?.map((gallery: any, index: number) => {
                        if (index > 3) return
                        return <GalleryItem key={index} thumbnail={gallery.thumbnail} id={gallery.link_youtube} />
                    })}
                </Grid>

                <HomeLinks to={ROUTE_URL.GALLERY} text='Lihat selengkapnya' />
            </Stack>
        </Wrapper>
    )
}

export default Gallery