import Header from "../../components/Header/Header";
import Contents from "../../components/Contents/Contents";

import HeaderComponent from "../../assets/Component/header/Header";
import CourseComponent from "../../assets/Component/course/Course";
import AboutComponent from "../../assets/Component/aboutUs/about";
import SliderComponent from "../../assets/Component/slider/Slider";
import FooterComponent from "../../assets/Component/footer/footer";
import PartnerComponent from "../../assets/Component/partner/partner";
// import "./about.module.scss";

function Home() {
  return (
    <div className="exo-font">
      <HeaderComponent />
      <SliderComponent />
      <AboutComponent />
      <CourseComponent />
      <PartnerComponent />
      <FooterComponent />
    </div>
  );
}

export default Home;