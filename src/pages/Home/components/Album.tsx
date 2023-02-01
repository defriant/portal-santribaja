import React from 'react'
import AlbumItem from './AlbumItem'
import { format } from 'date-fns'
import { Wrapper } from '../../../components'
import { Grid, Heading, Text } from '@chakra-ui/react'

interface IAlbum {
    data: any
}

const Album = (props: IAlbum) => {
    const { data } = props

    return (
        <Wrapper>
            <Heading fontFamily='Poppins' color='primary.50' textAlign='center'>Album</Heading>
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
                {data?.map((album: any, index: number) => {
                    return <AlbumItem key={index} image={album.image} date={format(new Date(album.created_at), 'dd MMMM yyyy')} title={album.caption} />
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

export default Album