import "./utils/bling.js";
import "./style.css";

function app() {
  // state
  let state = { id: 0, allTodo: [] };

  // ui
  let ui = {
    input: null,
  };
  console.log(ui);

  return mk("div", { id: "app" }, [
    mk("p", null, ["Todo App: Alt School Frontend Version"]),
    mk("form", { id: "form" }, [
      (ui.input = mk("input", {
        className: "todo",
        type: "text",
        id: "todo",
        placeholder: "Enter a todo",
      })),
      mk("button", { type: "submit", onclick: addTodo }, ["Add Todo"]),
    ]),
    (ui.todos = mk("ul", { id: "todos" }, [])),
  ]);

  function createTodo(todo) {
    let item;

    item = mk("li", { className: "todo-item" }, [
      mk("span", null, [todo.text]),
    ]);

    return item;
  }

  function addTodo(e) {
    e.preventDefault();

    let text = ui?.input.value;
    if (!text) return;

    const todo = { text, completed: false, id: Date.now() };

    state.allTodo.push(todo);
    console.log(state.allTodo);

    ui.input.value = "";

    ui?.todos.append(createTodo(todo));
  }
}

function render() {
  document.body.prepend(app());
}

render();
