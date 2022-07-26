import CardContainer from 'components/containers/CardContainer';
import React from 'react';

const Home = () => {
  const profesionalObjective =
    'Innovar y brindar soluciones enfocadas al análisis y diseño, implementación y mantenimiento de sistemas de información que permitan automatizar tareas repetitivas y generación de reportes; investigar y aprender sobre la implementación de modelos de aprendizaje automático que permitan resolver problemas de regresión o clasificación, así como también llevarlos a un entorno de producción.';
  return (
    <main className='h-full bg-gray p-3 flex flex-col gap-3'>
      <CardContainer title='Objetivo profesional' body={profesionalObjective} />
      <CardContainer title='Educación' body={profesionalObjective} />
      <CardContainer
        title='Cursos y certificaciones'
        body={profesionalObjective}
      />
    </main>
  );
};

export default Home;
