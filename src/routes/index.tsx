import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Website from "../pages/Website";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const AllRoutes = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/website" element={<Website />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default AllRoutes;
