import React from 'react';
import useCollapse from 'react-collapsed';
import './App.css';

const QuestionCollapsible = ({ question, answer }) => {

  const config = {
    duration: 1000,
    defaultExpanded: true
  };

  const { getCollapseProps = 'false', getToggleProps = 'false', isExpanded = 'false' } = useCollapse(config);

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

  const QuestionComponent = () => {

    return (
      <>
        <div className="custom-container" dangerouslySetInnerHTML={{ __html: question }}></div>
      </>
    )
  }

  const AnswerComponent = () => {

    return (
      <>
        <div className="custom-answer" dangerouslySetInnerHTML={{ __html: answer }}></div>
      </>
    )
  }

  return (
    <div>
      <div className="collapsible">
        <div className="header" {...getToggleProps()}>
          <QuestionComponent />
          <RightIcon />
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
            <AnswerComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionCollapsible;
