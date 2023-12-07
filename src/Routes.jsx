import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const MonitoringRiwayatTdkLogin = React.lazy(
  () => import("pages/MonitoringRiwayatTdkLogin"),
);
const HalamanKonfigurasiTdkLogin = React.lazy(
  () => import("pages/HalamanKonfigurasiTdkLogin"),
);
const Register = React.lazy(() => import("pages/Register"));
const FourHundredFour = React.lazy(() => import("pages/FourHundredFour"));
const ContactPage = React.lazy(() => import("pages/ContactPage"));
const Profile = React.lazy(() => import("pages/Profile"));
const MonitoringRiwayat = React.lazy(() => import("pages/MonitoringRiwayat"));
const HalamanKonfigurasi = React.lazy(() => import("pages/HalamanKonfigurasi"));
const Login = React.lazy(() => import("pages/Login"));
const MainPage = React.lazy(() => import("pages/MainPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/halamankonfigurasi" element={<HalamanKonfigurasi />} />
          <Route path="/monitoringriwayat" element={<MonitoringRiwayat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/fourhundredfour" element={<FourHundredFour />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/halamankonfigurasitdklogin"
            element={<HalamanKonfigurasiTdkLogin />}
          />
          <Route
            path="/monitoringriwayattdklogin"
            element={<MonitoringRiwayatTdkLogin />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
