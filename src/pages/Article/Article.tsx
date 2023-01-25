import React, { useMemo } from 'react'
import { Wrapper } from '../../components'
import { Flex, Grid, Heading } from '@chakra-ui/react'
import AricleItem from '../Home/components/AricleItem'

const Article = () => {
    const dummyArticle = useMemo(() => [
        {
            image: 'https://studio.syifaaviglowing.com/assets/images/article-1662781596-3itXz.jpeg',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe ab error omnis quaerat, non illum ex debitis? Odio soluta quas aperiam praesentium quos, illum, quisquam quo optio eos asperiores laborum consectetur. Itaque rerum asperiores iste animi vitae possimus non id fuga quo reprehenderit quas, accusamus illo fugit quia ab earum quibusdam dignissimos odio quae dolor maxime alias at sequi ex! Vero ipsa error debitis. Omnis fuga, blanditiis unde aliquid consectetur ducimus labore possimus quos deleniti, maiores, ex nobis saepe rerum debitis accusantium suscipit assumenda enim atque dolor eligendi officia? Eligendi asperiores eius nulla ad fugit nisi! Quisquam, dolor quos.',
        },
        {
            image: 'https://studio.syifaaviglowing.com/assets/images/article-1656322264-Hx734.jpeg',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe ab error omnis quaerat, non illum ex debitis? Odio soluta quas aperiam praesentium quos, illum, quisquam quo optio eos asperiores laborum consectetur. Itaque rerum asperiores iste animi vitae possimus non id fuga quo reprehenderit quas, accusamus illo fugit quia ab earum quibusdam dignissimos odio quae dolor maxime alias at sequi ex! Vero ipsa error debitis. Omnis fuga, blanditiis unde aliquid consectetur ducimus labore possimus quos deleniti, maiores, ex nobis saepe rerum debitis accusantium suscipit assumenda enim atque dolor eligendi officia? Eligendi asperiores eius nulla ad fugit nisi! Quisquam, dolor quos.',
        },
        {
            image: 'https://studio.syifaaviglowing.com/assets/images/article-1656149499-1u9w9.jpeg',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe ab error omnis quaerat, non illum ex debitis? Odio soluta quas aperiam praesentium quos, illum, quisquam quo optio eos asperiores laborum consectetur. Itaque rerum asperiores iste animi vitae possimus non id fuga quo reprehenderit quas, accusamus illo fugit quia ab earum quibusdam dignissimos odio quae dolor maxime alias at sequi ex! Vero ipsa error debitis. Omnis fuga, blanditiis unde aliquid consectetur ducimus labore possimus quos deleniti, maiores, ex nobis saepe rerum debitis accusantium suscipit assumenda enim atque dolor eligendi officia? Eligendi asperiores eius nulla ad fugit nisi! Quisquam, dolor quos.',
        },
        {
            image: 'https://studio.syifaaviglowing.com/assets/images/article-1656149700-O1oV1.jpeg',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe ab error omnis quaerat, non illum ex debitis? Odio soluta quas aperiam praesentium quos, illum, quisquam quo optio eos asperiores laborum consectetur. Itaque rerum asperiores iste animi vitae possimus non id fuga quo reprehenderit quas, accusamus illo fugit quia ab earum quibusdam dignissimos odio quae dolor maxime alias at sequi ex! Vero ipsa error debitis. Omnis fuga, blanditiis unde aliquid consectetur ducimus labore possimus quos deleniti, maiores, ex nobis saepe rerum debitis accusantium suscipit assumenda enim atque dolor eligendi officia? Eligendi asperiores eius nulla ad fugit nisi! Quisquam, dolor quos.',
        },
        {
            image: 'https://studio.syifaaviglowing.com/assets/images/article-1655712976-0340r.jpeg',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe ab error omnis quaerat, non illum ex debitis? Odio soluta quas aperiam praesentium quos, illum, quisquam quo optio eos asperiores laborum consectetur. Itaque rerum asperiores iste animi vitae possimus non id fuga quo reprehenderit quas, accusamus illo fugit quia ab earum quibusdam dignissimos odio quae dolor maxime alias at sequi ex! Vero ipsa error debitis. Omnis fuga, blanditiis unde aliquid consectetur ducimus labore possimus quos deleniti, maiores, ex nobis saepe rerum debitis accusantium suscipit assumenda enim atque dolor eligendi officia? Eligendi asperiores eius nulla ad fugit nisi! Quisquam, dolor quos.',
        },
        {
            image: 'https://studio.syifaaviglowing.com/assets/images/article-1655188802-YAm9W.jpeg',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe ab error omnis quaerat, non illum ex debitis? Odio soluta quas aperiam praesentium quos, illum, quisquam quo optio eos asperiores laborum consectetur. Itaque rerum asperiores iste animi vitae possimus non id fuga quo reprehenderit quas, accusamus illo fugit quia ab earum quibusdam dignissimos odio quae dolor maxime alias at sequi ex! Vero ipsa error debitis. Omnis fuga, blanditiis unde aliquid consectetur ducimus labore possimus quos deleniti, maiores, ex nobis saepe rerum debitis accusantium suscipit assumenda enim atque dolor eligendi officia? Eligendi asperiores eius nulla ad fugit nisi! Quisquam, dolor quos.',
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
                    Article
                </Heading>
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
                    {dummyArticle?.map((article, index) => {
                        return <AricleItem key={index} image={article.image} content={article.content} />
                    })}
                </Grid>
            </Flex>
        </Wrapper>
    )
}

export default Article