import React, { useState } from 'react';
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa';
import moment from 'moment';
import { firebase } from 'firebase';
import { useSelectedProjectValue } from '../context';

export const AddTask = ({ 
    showAddTaskMain = true, 
    showShouldMain = false, 
    showQuickAdd,
    setShowQuickAddTask,
   }) => {
       const [task, setTask] = useState('');
       const [taskDate, setTaskDate] = useState('');
       const [project, setProject] = useState('');
       const [showMain, setShowMain] =useState(shouldShowMAin);
       const [showProjectOverlay, setShowProjectOverlay] = useState(false);
       const [showTaskDate, setShowTaskDate] =useState(false);

       const { selectedProject } = useSelectedProjectValue();
       const addTask = () => {
           const projectId = project ||setProject
       }

       return (
           <div>yo</div>
       );

   };