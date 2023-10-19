import TaskList from './TaskList';
import { Tasks } from '../defaults/defaults';
import * as CustomNotyf from '../defaults/notyfSetup';

export default {
    component: TaskList,
    title: 'TaskList',
    decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
    tags: ['autodocs'],
};

let loading = false;

const toggleLoading = () => {
    loading = !loading;
    const message = loading ? "Loading..." : "Unloading...";
    CustomNotyf.default.success(message);
}

export const Default = {
    args: {
        // Shaping the stories through args composition.
        // The data was inherited from the Default story in Task.stories.jsx.
        tasks: Tasks
    },
};

export const WithPinnedTasks = {
    args: {
        tasks: [
            ...Default.args.tasks.slice(0, 5),
            { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
        ]
    },
};

export const Loading = {
    args: {
        tasks: [],
        loading: true
    },
};

export const Empty = {
    args: {
        // Shaping the stories through args composition.
        // Inherited data coming from the Loading story.
        ...Loading.args
    },
};

export const WithLoadingButton = {
    args: {
        // Shaping the stories through args composition.
        // The data was inherited from the Default story in Task.stories.jsx.
        tasks: Tasks,
        displayLoadingButton: true,
        onToggleLoading: () => toggleLoading(),
        loading: loading,
    },
}