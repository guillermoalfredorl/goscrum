import "./Tasks.styles.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import { Header } from "../../Header/Header";
import { Card } from "../../Card/Card";
import { TaskForm } from "../../TaskForm/TaskForm";
import { FormControlLabel, FormLabel } from "@mui/material";

export const Tasks = () => (
  <>
    <Header />
    <main id="tasks">
      <TaskForm />
      <section className="wrapper_list">
        <div className="list-header">
          <div>
            <h2>My Tasks</h2>
          </div>
          <div className="filters">
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="ALL"
                  control={<Radio />}
                  label="todas"
                />
                <FormControlLabel
                  value="ME"
                  control={<Radio />}
                  label="Mis Tareas"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className="list_group">
          <div className="list">{/* <Card key={} data={} /> */}</div>
        </div>
      </section>
    </main>
  </>
);
