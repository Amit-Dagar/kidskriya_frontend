import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashboardRouter from "./routes/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={DashboardRouter} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
