import React, { useMemo } from 'react'
import AlbumItem from '../Home/components/AlbumItem'
import { Wrapper } from '../../components'
import { Flex, Grid, Heading } from '@chakra-ui/react'

const Album = () => {
    const dummyAlbum = useMemo(() => [
        {
            image: 'https://studio.syifaaviglowing.com/assets/images/feed-1663237654-SHcn1.jpeg',
            title: 'grand opening syifa avi glowing regional kota bekasi',
            date: '15 September 2022',
        },
        {
            image: 'https://studio.syifaaviglowing.com/assets/images/feed-1663237647-awVSj.jpeg',
            title: 'grand opening syifa avi glowing regional kota bekasi',
            date: '15 September 2022',
        },
        {
            image: 'https://studio.syifaaviglowing.com/assets/images/feed-1662799433-3P5Os.jpeg',
            title: 'grand opening syifa avi glowing regional kota bekasi',
            date: '10 September 2022',
        },
        {
            image: 'https://studio.syifaaviglowing.com/assets/images/feed-1662799422-pFcYy.jpeg',
            title: 'Ucapan Dari Himpunan Pengusaha Nahdliyin',
            date: '10 September 2022',
        },
        {
            image: 'https://studio.syifaaviglowing.com/assets/images/feed-1647918374-af0Ak.jpeg',
            title: 'Ucapan Dari Himpunan Pengusaha Nahdliyin',
            date: '22 March 2022',
        },
        {
            image: 'https://studio.syifaaviglowing.com/assets/images/feed-1647918282-gtIqI.jpeg',
            title: 'Ucapan Dari PESANTREN RI 1',
            date: '22 March 2022',
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
                    Album
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
                    {dummyAlbum?.map((album, index) => {
                        return <AlbumItem key={index} image={album.image} date={album.date} title={album.title} />
                    })}
                </Grid>
            </Flex>
        </Wrapper>
    )
}

export default Album