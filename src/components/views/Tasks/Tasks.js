import "./Tasks.styles.css";
import { Header } from "../../Header/Header";
import { Card } from "../../Card/Card";
import { TaskForm } from "../../TaskForm/TaskForm";

export const Tasks = () => (
  <>
    <Header />
    <main id="tasks">
      <TaskForm />
      <section className="wrapper_list">
        <div className="list-header">
          <h2>Mis tareas</h2>
        </div>
        <div className="list_group">
          <div className="list">{/* <Card key={} data={} /> */}</div>
        </div>
      </section>
    </main>
  </>
);
