export function createTodo(title, dueDate, priority, description) {
    return {
        title, 
        dueDate,
        priority,
        description,
        completed: false
    };
};