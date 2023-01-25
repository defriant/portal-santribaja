import React, { useMemo } from 'react'
import { Wrapper } from '../../components'
import { Flex, Grid, Heading } from '@chakra-ui/react'
import GalleryItem from '../Home/components/GalleryItem'

const Gallery = () => {
    const gallery = useMemo(() => [
        {
            thumbnail: 'https://studio.syifaaviglowing.com/assets/images/testimonial-1663236049-oHz1X.jpeg',
            id: '7X26F8J0DWY',
        },
        {
            thumbnail: 'https://studio.syifaaviglowing.com/assets/images/testimonial-1663235993-b8FbA.jpeg',
            id: 'KwnxHcAUWVI',
        },
        {
            thumbnail: 'https://studio.syifaaviglowing.com/assets/images/testimonial-1649666970-Uqmws.png',
            id: 'sMSsMgZLgXk',
        },
        {
            thumbnail: 'https://studio.syifaaviglowing.com/assets/images/testimonial-1649057424-X1Z2Y.jpeg',
            id: 'AdgZh3TjGUk',
        },
        {
            thumbnail: 'https://studio.syifaaviglowing.com/assets/images/testimonial-1649055609-yhX1A.jpeg',
            id: 'v51BBsFsgT8',
        },
        {
            thumbnail: 'https://studio.syifaaviglowing.com/assets/images/testimonial-1649055576-0bw46.jpeg',
            id: 'NDB1RwOf5Es',
        },
    ], [])

    return (
        <Wrapper>
            <Flex direction='column' minHeight='calc(100vh - 117px)'>
                <Heading 
                    color='primary' 
                    textAlign='center' 
                    marginBottom='30px'
                >
                    Gallery
                </Heading>
                <Grid 
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(3, 1fr)',
                    }} 
                    paddingY='25px' 
                    gap='20px'
                >
                    {gallery?.map((gallery, index) => {
                        return <GalleryItem key={index} thumbnail={gallery.thumbnail} id={gallery.id} />
                    })}
                </Grid>
            </Flex>
        </Wrapper>
    )
}

export default Gallery