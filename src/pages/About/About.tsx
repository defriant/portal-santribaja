import React from 'react'
import { Wrapper } from '../../components'
import { Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import { IMG_LOGO } from '../../assets'

const About = () => {
    return (
        <Wrapper>
            <Flex direction='column' minHeight='calc(100vh - 117px)'>
                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={{ base: '50px', md: '25px' }}>
                    <GridItem>
                        <Heading 
                            color='primary' 
                            marginBottom='30px'
                        >
                            About Us
                        </Heading>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci officia dolorem, ipsum quaerat natus veniam culpa fugiat ea tenetur modi eveniet, facere ducimus blanditiis magnam expedita velit laudantium libero dicta hic ratione! Impedit sunt in aspernatur exercitationem? Consequatur omnis pariatur error nam, odit at? Fugit, nihil deserunt, dolorem atque fugiat expedita nulla maiores quisquam rerum commodi, provident ex vero? Vitae explicabo iure pariatur facilis, cupiditate hic voluptatum iusto odio nihil dicta enim impedit unde fugit asperiores eos debitis dignissimos. Ipsum inventore rerum repellendus ullam cum porro impedit deserunt cumque. Voluptatem consequuntur ab ducimus iusto numquam excepturi, impedit animi non.</Text>
                    </GridItem>
                    <Grid>
                        <Image src={IMG_LOGO} width={{ base: '200px', md: '350px'}} margin={{ base: 'auto', md: '0px 0px 0px auto' }} />
                    </Grid>
                </Grid>
            </Flex>
        </Wrapper>
    )
}

export default About