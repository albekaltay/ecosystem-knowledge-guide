import styled from "styled-components"

import './App.css';
import { CourseInstructorCard } from "./components/CourseInstructorCard";
import { ReviewCard } from "./components/ReviewCard";




function App() {
  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
  
  return (

<div>

<Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>

  <CourseInstructorCard></CourseInstructorCard>
  <ReviewCard></ReviewCard>


</div>


  );
}

export default App;
