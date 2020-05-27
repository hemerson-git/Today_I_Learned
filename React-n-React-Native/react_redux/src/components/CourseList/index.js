import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CourseList() {
  const courses = useSelector(state => state.data)
  const dispach = useDispatch();
  
  function addCourse() {
    dispach({ type: 'ADD_COURSE', title: 'GraphQL'})
  }
  
  return (
    <>
      <ul>
        { courses.map(course => <li key={course}>{course}</li>)}
      </ul>
      <button type="button" onClick={addCourse}>
        adicionar curso
      </button>
    </>
  );
}
