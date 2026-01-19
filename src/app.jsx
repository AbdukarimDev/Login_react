import TodoBox from "./TodoBox";
import { Page, Grid } from "./todo.style.js";

function App() {
  return (
    <Page>
      <Grid>
        <TodoBox title="Work" />
        <TodoBox title="Study" />
        <TodoBox title="Home" />
        <TodoBox title="Personal" />
      </Grid>
    </Page>
  );
}

export default App;
