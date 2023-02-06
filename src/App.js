import Home from "./routes/home/Home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import Authentication from "./routes/authentication/Authentication.component";

const Shop = () => {
  return <h1>Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="auth" element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
