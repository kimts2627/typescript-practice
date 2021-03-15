{
  type ToDo = {
    title: string;
    desc: string;
    label: string;
    priority: 'high' | 'low';
  };

  const todo: ToDo = {
    title: 'hello',
    desc: 'world',
    label: 'study',
    priority: 'high',
  };

  console.log(updateTodo(todo, { priority: 'low' }));


  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }
}