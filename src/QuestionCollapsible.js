import React from 'react';
import useCollapse from 'react-collapsed';
import './App.css';

const QuestionCollapsible = ({ question, answer }) => {

  let n = 29;
  question = question.slice(n);
  var newQuestion = question.slice(0, -11);

  const config = {
    duration: 1000,
    defaultExpanded: true
  };

  const { getCollapseProps= 'false', getToggleProps='false', isExpanded='false' } = useCollapse(config);

  const RightIcon = () => {

    if (!isExpanded) {
      return (
        <div className='icon'>
          <i className="fa-solid fa-plus"></i>
        </div>
      )
    }
    if (isExpanded) {
      return (
        <div className='icon'>
          <i className="fa-solid fa-minus"></i>
        </div>
      )
    }
  }

  return (
    <div>
      <div className="collapsible">
        <div className="header" {...getToggleProps()}>
          <p className="text"> {newQuestion} </p>
          <RightIcon />
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
           <p className="text"> {answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionCollapsible;
