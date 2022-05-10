import React from 'react';
import sectionJson from '../data/sections.json';
import ChapterCollapsible from './ChapterCollapsible';

const Company = () => {

  const mapSection = sectionJson.map((section, id) => {

    return (
      <div key={id}>
        <div className='company-collapase'>
          <ChapterCollapsible section={section} />
        </div>
      </div>
    )
  })

  return (
    <div>
      {mapSection}
    </div>
  )
}

export default Company;