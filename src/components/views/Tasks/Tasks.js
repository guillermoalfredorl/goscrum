import { Header } from "../../Header/Header";
import "./Tasks.styles.css";

export const Tasks = () => (
  <>
    <Header />
    <main id="tasks">
      <section className="wrapper_list">
        <div className="list-header">
          <h2>Mis tareas</h2>
        </div>
        <div className="list">
          <div className="card">
            <div className="close">x</div>
            <h3>Tarea 1</h3>
            <h6>24/1/2022 16:40 hs.</h6>
            <h5>Guillermo Romero</h5>
            <button>Nueva</button>
            <button>Alta</button>
            <p>Descripcion fake</p>
          </div>
        </div>
      </section>
    </main>
  </>
);
