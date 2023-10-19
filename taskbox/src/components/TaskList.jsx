import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

export default function TaskList({ loading, tasks, onPinTask, onArchiveTask, displayLoadingButton, onToggleLoading }) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items" data-testid="loading" key={"loading"}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  const tasksInOrder = [
    ...tasks.filter((t) => t.state === 'TASK_PINNED'),
    ...tasks.filter((t) => t.state !== 'TASK_PINNED'),
  ];

  return (<>
    {displayLoadingButton && <>
      <button onClick={onToggleLoading}>Load/Unload</button>
      <br />
      <br />
    </>
    }
    {!tasks.length && <div className="list-items" key={"empty"} data-testid="empty">
      <div className="wrapper-message">
        <span className="icon-check" />
        <p className="title-message">You have no tasks</p>
        <p className="subtitle-message">Sit back and relax</p>
      </div>
    </div>}
    {tasks.length && <div className="list-items">
      {tasksInOrder.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>}
  </>);
}

TaskList.propTypes = {
  /** Checks if it's in loading state */
  loading: PropTypes.bool,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
  onToggleLoading: PropTypes.func,
};

TaskList.defaultProps = {
  loading: false,
  displayLoadingButton: false,
};