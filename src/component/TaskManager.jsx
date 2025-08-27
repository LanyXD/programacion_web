import { useState } from "react";
import AddTask from "./AddTask"
import FilterTask from "./FilterTask";
import TaskList from "./TaskList";

function TaskManager() {

    return (
        <div className="main_container">
            <h1>Task Manager</h1>
            
            <h2>--Add Secction--</h2>
            <AddTask />

            <h2>--Filter Secction--</h2>
            <FilterTask />

            <h2>--Tasks section--</h2>
            <TaskList />

        </div>
    )
}

export default TaskManager;
