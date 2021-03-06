import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context';



export const App = () =>  (
  <SelectedProjectProvider>
    <ProjectsProvider>
    <div className="App">
      <Header />
      <Content />

    </div>
    </ProjectsProvider>
  </SelectedProjectProvider>
    
  );
