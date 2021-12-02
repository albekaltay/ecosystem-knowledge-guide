import React,{Component} from 'react';
import {CourseInstructorCard} from '../components/CourseInstructorCard.js';
//import { storiesOf } from '@storybook/react';
//import ApolloWraper from '../src/components/ReviewCard/ApolloProvider';
//import { addDecorator } from "@storybook/react";

export default {
     title: "Components/Course Instructor Card",
     component: "Course Instructor Card",
     subcomponents: { CourseInstructorCard },
    };


  

const Template = (args) => (
  <CourseInstructorCard {...args}></CourseInstructorCard>
    
);
  export const CourseInstructorCardStory = Template.bind({});
  CourseInstructorCardStory.args = {
    description: 'Valto is a visionary strategist with deep knowledge about innovation, entrepreneurship, investing and digital world interacting with real world. He advises public policymakers on economic development in various countries globally world. Valto is a serial entrepreneur who has started several companies across Europe and the US in the web and mobile fields and have more than 20 years global entrepreneurship experience combined with entrepreneurship and startup advisory work via Government and non-profit NGO for 10 years.',
    lastName: 'Loikkanen',
    firstName: 'Valto',
    title: 'Meet your Instructor',
    positionName: " Founder and CEO",
    companyName: " Startup Commons",
    cardColor:'linear-gradient(180deg, #00000 0%, #0E5E81 100%)',
    intervalMS: 6100,
    showArrows:true,

  };
 

