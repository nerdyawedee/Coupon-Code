import Header from "./components/Header.jsx";
import Bottom from "./components/Bottom.jsx";
import Home from './components/Home.jsx';
import Notfound from './components/Notfound.jsx'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import NotFound from "./components/Notfound.jsx";
import Sellcoupons from "./components/Sellcoupons.jsx";
import Account from './components/Account.jsx';
import Signup from "./components/Signup.jsx";
import Login from "./components/Signin.jsx";
// import User from "./components/User.jsx";
function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="Sell" element={<Sellcoupons />} />
            <Route path="Account" element={<Account />} />
            <Route path="Signup" element={<Signup />} />
            {/* <Route path="/user/:userId" element={<User />} /> */}
            <Route path="Signin" element={<Login />} />
           </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Bottom />
    </>
  );
}

export default App;
