import React from 'react';

export const TaskBanner = props => (
    <h4 className = "bg-primary text-white text-center p-4"> 
        {props.userName} 's Taks App ( {props.taskItems.filter(t=> !t.done).length} taks to do)
    </h4>

)