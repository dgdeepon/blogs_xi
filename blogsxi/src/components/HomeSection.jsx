import { Box, Button, Grid, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function HomeSection() {
  return (
    <Box p={'100px'}>
      <Grid gridTemplateColumns={{base:'repeat(1,1fr)',lg:'repeat(2,1fr)'}} gap={'1%'} margin={'auto'}>
        <VStack  textAlign={'left'} justifyContent={'center'}>
          <Box>
          <Text fontWeight={'bold'} fontSize={'4xl'}>Write your first blog!</Text>
          <Text lineHeight={'2'}>Blogging is a great way to showcase your skills and share your knowledge with the world. By writing blog posts, you can demonstrate your expertise in a particular topic and attract new readers and followers.Additionally, blogging can help you improve your writing skills and learn new things. By practising regularly, you can become a better writer and gain valuable insights into your field of interest.</Text>
          <Box mt={'10px'}>
            <Link to={'/signup'}>
            <Button mr={'10px'} bgColor={'#f553b8'} color={'white'}>Sign Up</Button>
            </Link>
            <Link to={'/signin'}>
            <Button bgColor={'#605ab4'} color={'white'}>Sign In</Button>
            </Link>
          </Box>
          </Box>
        </VStack>
        <Box>
          <Image width={'100%'} src='https://www.remessaonline.com.br/blog/wp-content/uploads/2022/04/o-que-e-blog.jpg' borderRadius={'50px'}/>
        </Box>
      </Grid>
    </Box>
  )
}

export default HomeSection