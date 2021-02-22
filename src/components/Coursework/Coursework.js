import React from 'react';
import { Container } from './Styles';

const Coursework = () => {

  const courses = [
    'Computer Algorithms I', 'Data Structures', 'Database Systems',
    'Introduction to Data Science', 'Program Design II', 'Programming Language Design and Implementation',
    'Secure Web Application Development', 'Software Design', 'Software Development for Mobile Platforms',
    'User Interface Design and Programming', 'Video Game Design and Development'
  ];

  return (
    <Container>
      {courses.map((course, index) => <li key={index}>{course}</li>)}
    </Container>
  );
};

export default Coursework;