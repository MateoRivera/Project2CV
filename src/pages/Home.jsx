import CardContainer from 'components/containers/CardContainer';
import education from 'components/static/education';
import professionalObjective from 'components/static/professionalObjective';
import courses from 'components/static/courses';
import React from 'react';
import personalXP from 'components/static/personalXP';
import TitleFloating from 'components/text/TitleFloating';

const Home = () => (
  <main className='h-full p-3 flex flex-col gap-3 md:items-center'>
    <div className='md:max-w-3xl'>
      <CardContainer
        title='Objetivo profesional'
        body={professionalObjective}
      />
    </div>

    <div className='flex flex-col md:max-w-3xl gap-3 lg:grid lg:grid-cols-2 lg:gap-3 lg:max-w-full'>
      <CardContainer title='Educación' body={education} />
      <CardContainer title='Cursos y certificaciones' body={courses} />
    </div>

    <div className='md:max-w-3xl lg:max-w-full lg:w-full'>
      <CardContainer title='Experiencia personal' body={personalXP} />
    </div>

    <div className='w-full'>
      <TitleFloating title='Hobbies' />
    </div>

    <div className='w-full'>
      <TitleFloating title='Idiomas' />
    </div>
  </main>
);

export default Home;
