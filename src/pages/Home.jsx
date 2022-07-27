import CardContainer from 'components/containers/CardContainer';
import education from 'components/static/education';
import professionalObjective from 'components/static/professionalObjective';
import courses from 'components/static/courses';
import React from 'react';

const Home = () => (
  <main className='h-full p-3 flex flex-col gap-3 md:items-center'>
    <CardContainer title='Objetivo profesional' body={professionalObjective} />
    <div className='flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:gap-3'>
      <CardContainer title='Educación' body={education} />
      <CardContainer title='Cursos y certificaciones' body={courses} />
    </div>
  </main>
);

export default Home;
