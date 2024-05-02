import { faker } from "@faker-js/faker";

export const createTaskPayload = {
    assigner_id: null,
    assignee_id: null,
    project_id: "REPLACE_WITH_PROJECT_ID",
    section_id: null,
    parent_id: null,
    order: 1,
    content: "REPLACE_WITH_TASK_NAME",
    description: "",
    is_completed: false,
    labels: [],
    priority: 1,
    comment_count: 0,
    creator_id: "",
    created_at: "2024-05-01T17:46:13.805121Z",
    due: {
        date: "2024-05-01",
        string: "1 May",
        lang: "en",
        is_recurring: false,
    },
    url: "https://todoist.com/app/task/7951905865",
    duration: null,
};
