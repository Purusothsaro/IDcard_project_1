import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home";
import Dashboard from "./component/Dashboard/Dashboard";
import TopBar from "./component/TopBar";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import Services from "./component/Services";
import Benefits from "./component/ Benefits";
import Contact from "./component/Contact";
import FeaturedDesigns from "./component/FeaturedDesigns";
import WhyChooseUs from "./component/WhyChooseUs";
import Footer from "./component/Footer";
import StudentList from "./component/studentList/StudentList";
import PDFWatermarkApp from "./component/PDFWatermarkApp/PDFWatermarkApp";
import PhotoOptimizationApp from "./component/PhotoOptimizationApp/PhotoOptimizationApp";
import ParentPortal from "./component/ParentPortal/ParentPortal";
import MobilePhotoCapture from "./component/MobilePhotoCapture/MobilePhotoCapture";
import DigitalCardSync from "./component/DigitalCardSync/DigitalCardSync";
import DocumentScan from "./component/ DocumentScan/ DocumentScan";
import Idcard from "./component/Idcard/Idcard";
import SchoolList from "./component/SchoolDetails/SchoolList";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TopBar />
                <Navbar />
                <HeroSection />
                <FeaturedDesigns />
                <Services />
                <WhyChooseUs />
                <Benefits />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/studentList" element={<StudentList />} />
          <Route path="/PDFWatermarkApp" element={<PDFWatermarkApp />} />
          <Route
            path="/PhotoOptimizationApp"
            element={<PhotoOptimizationApp />}
          />
          <Route path="/ParentPortal" element={<ParentPortal />} />
          <Route path="/MobilePhotoCapture" element={<MobilePhotoCapture />} />
          <Route path="/DigitalCardSync" element={<DigitalCardSync />} />
          <Route path="/DocumentScan" element={<DocumentScan />} />
          <Route path="/Idcard" element={<Idcard />} />
          <Route path="/SchoolDetails/SchoolList" element={SchoolList} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
