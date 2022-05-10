import React from 'react';
import useCollapse from 'react-collapsed';
import './App.css';
import companyJson from '../data/company-dealings/qa.json';
import directorJson from '../data/directors-officers-management/qa.json';
import QuestionCollapsible from './QuestionCollapsible';


const ChapterCollapsible = ({ section }) => {

  const config = {
    duration: 1000,
    defaultExpanded: true
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  // Detect the icon to display 
  const DisplayIcon = () => {

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

  const directorFilter = directorJson.filter(x => x.sectionId === section.id)
  const mapDirector = directorFilter.map((director, id) => {
    const question = director.question
    const answer = director.answer

    return (
      <div key={id}>
        <QuestionCollapsible question={question} answer={answer} />
      </div>
    )
  })

  const companyFilter = companyJson.filter(x => x.sectionId === section.id)
  const mapCompany = companyFilter.map((company, id) => {
    const question = company.question
    const answer = company.answer

    return (
      <div key={id}>
        <QuestionCollapsible question={question} answer={answer} />
      </div>
    )
  })

  return (
    <div>
      <div className="collapsible">
        <div className="header" {...getToggleProps()}>
          <h4 className="text">{section.title}</h4>
          <DisplayIcon />
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
            {mapCompany}
            {mapDirector}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChapterCollapsible;
