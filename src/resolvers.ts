
type Todo = {
    id: string,
    title: string,
    done: boolean
};

let todos: Todo[] = [
    { id: "1", title: "todo A", done: false},
    { id: "2", title: "todo B", done: false},
    { id: "3", title: "todo C", done: false},
];

export const resolvers = {
    Query: {
        hello: () => "Hello from AWS Lambda",
        todos: () => todos,
    },

    Mutation: {
        addTodo: (_: unknown, { title }: { title: string }) => {
            const t: Todo = {
                id: String(Date.now()),
                title,
                done: false
            };
        },
        toggleTodo: (_: unknown, { id }: { id: string }) => {
            const toModify = todos.find(td => td.id === id);
            if (! toModify) throw new Error("todo not found");
            toModify.done = !(toModify.done);
        },
    },


};


