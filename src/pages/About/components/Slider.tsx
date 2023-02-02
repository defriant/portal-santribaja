import React, { useRef } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Box, Grid, Image } from '@chakra-ui/react'

interface ISlider {
    data: any
}

const Slider = (props: ISlider) => {
    const { data } = props

    const carouselPrev = useRef(null)
    const carouselNext = useRef(null)

    return (
        <>
        <Box
            as={Swiper}
            position='relative'
            loop={true}
            slidesPerView={1}
            modules={[Navigation, Pagination, Autoplay]}
            grabCursor={false}
            navigation={{
                prevEl: carouselPrev.current,
                nextEl: carouselNext.current
            }}
            onBeforeInit={(swiper: any) => {
                swiper.params.navigation.prevEl = carouselPrev.current;
                swiper.params.navigation.nextEl = carouselNext.current;
            }}
            centeredSlides={true}
            autoplay={true}
            pagination={{
                el: '.landing-image-pagination',
                clickable: true
            }}
            allowTouchMove={true}
            borderRadius='6px'
            w={{ base: '350px', xl: '470px' }}
            h={{ base: '350px', xl: '470px' }}
            overflow='hidden'
        >
            {
                data.map((v: any, i: number) => (
                    <SwiperSlide key={i} style={{ borderRadius: '6px', overflow: 'hidden', zIndex: '1' }}>
                        <Image
                            src={v}
                            w={{ base: '350px', xl: '470px' }}
                            h={{ base: '350px', xl: '470px' }}
                            borderRadius='6px'
                            objectFit='cover'
                        />
                    </SwiperSlide>
                ))
            }

            <Grid
                templateColumns='1fr 1fr'
                gap='5rem'
                position='absolute'
                top='0'
                right='0'
                bottom='0'
                left='0'
                borderRadius='6px'
                overflow='hidden'
                zIndex='2'
            >
                <Box
                    ref={carouselPrev}
                    h='100%'
                />
                <Box
                    ref={carouselNext}
                    h='100%'
                />
            </Grid>
        </Box>
        <Box height='10px' />
        <Box
            className='landing-image-pagination'
            display='flex'
            alignItems='center'
            justifyContent='center'
        />
    </>
    )
}

export default Slider