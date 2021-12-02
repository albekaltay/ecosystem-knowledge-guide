import React from 'react'
import { Box, Text,  VStack ,Flex , Container} from "@chakra-ui/react"
import styled from "styled-components";
import PropTypes from 'prop-types';
import UserImg from '../stories/assets/Valtooo.png'
import { Image } from '@chakra-ui/image';
import { useState } from 'react';

const BackWrapper = styled.section`


display: flex;
flex-direction: column;
align-items: flex-start;
padding: 112px 204px;

position: absolute;
width: 1440px;
height: 888px;
left: 2348px;
top: 302px;

background: linear-gradient(312.33deg, #F7FBFD 25.48%, rgba(224, 246, 255, 0.7) 50.38%, #F7FBFD 75.55%);

`;


const Wrapper = styled.section`

/* Auto Layout */



width: 1300px;
height: 300px;


background: #F7FBFD;
/* /Grey/50 (white) */

border: 32px solid #FFFFFF;
/* Card 1 */

box-shadow: 0px 10px 20px -2px rgba(34, 44, 47, 0.08);




`;


const ImageWrapper = styled.section`

left: 100px;

`;

const NameWrapper = styled.section`

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
color: #FFFFFF;

`;

const CompanyAndPositionWrapper = styled.section`


font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 12px;
color: #FFFFFF;

`;






export const CourseInstructorCard = ({ firstName ,lastName, companyName, positionName,description, title, avatarSrc, cardColor,...props}) => {



  const BoxInstructorStyle = styled.section`

display: flex;
flex-direction: column;
align-items: center;
padding: 0px 0px 0px 0px;

width: 200px;
height: 305px;

background: ${cardColor};

border-radius: 4px;



`;



    /*   const { data, loading, error } = useQuery(ReviewCards);
      if (loading) {
        return (<h1 loading />);
      }
      if (error) {
        return (<h1 error />);
      } */
      return (

     
         
      
          <Wrapper>
   <Flex>
     <Box >

            <BoxInstructorStyle >


            <VStack 
  align="stretch"
>
  <Box h="40px"  >
  <ImageWrapper >
              <Image   style={{ weight:"70px" , height:"70px" , marginLeft:"20px"}}   src={UserImg}   ></Image>
              </ImageWrapper>
  </Box>
  <Box h="40px" style={{marginTop:"30px"}} >
  <NameWrapper> 
                <Text >{firstName} {lastName}</Text>
                </NameWrapper>
  </Box>
 
</VStack>


<Box h="40px">
  <CompanyAndPositionWrapper >
               
               <Text > {positionName } </Text>
            

              </CompanyAndPositionWrapper>

            
  </Box>
            <Box style={{marginTop:"25px", color:"#FFFFFF" , fontSize:"12px"}}>
               <Text  >{companyName}</Text>
            
      </Box>
 
            </BoxInstructorStyle>
           

              </Box>



              <VStack
  
  align="stretch"
>
<Box><Text style={{fontSize:"16px", marginLeft:"45px" ,marginTop:"30px", fontWeight:"bold", fontFamily:"Roboto", color:"#25799D" } }>{title}</Text></Box>

<Box><Text style={{fontSize:"10px", marginLeft:"45px" ,marginTop:"0px",fontWeight:"normal", fontFamily:"Roboto", color:"#004766"} }>{description}</Text></Box>

  
</VStack>




            </Flex>


            </Wrapper>
    
      )
    };
    
    CourseInstructorCard.propTypes = {
        description: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName : PropTypes.string.isRequired,
        companyName : PropTypes.string.isRequired,
        positionName : PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cardColor: PropTypes.string.isRequired,
    };
    
 
