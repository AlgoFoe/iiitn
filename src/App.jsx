import Hostel from './pages/Hostel'
import Placement from './pages/Placement'
import Research from './pages/Research'

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Faculty from "./pages/Faculty/Faculty";
import AboutUs from "./pages/About-us/About-us";
import Projects from "./pages/Projecs/Projects";
import Events from "./pages/Events/Events";
import { Pastevents, UpcomingEvents } from "./data/events/data";
import {
  Upcomingprojects as eceUpcomingProjects,
  Completedprojects as eceCompletedProjects,
  headerImg as eceHeaderImg,
} from "./data/ece/projects";
import {
  Upcomingprojects as cseUpcomingProjects,
  Completedprojects as cseCompletedProjects,
  headerImg as cseHeaderImg,
  consultancyProjects,
} from "./data/cse/projects";
import Navbar from "./components/navbar";
import Governance from "./pages/governance/Governance";
import DepartmentPage from "./pages/department-about/DeptAbout";
import Footer from './components/footer';
import Announcement from './pages/Announcement';
import Fees_payment from './pages/Fees_payment';
import AcademicCalender from './pages/AcademicCalender';
import TimeTable from './pages/TimeTable';
import InternationalResearch from './pages/International_research';
import Conferences from './pages/Conferences';
import Admission from './pages/Admission';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/:dept/faculty" element={<Faculty />} />
          
        <Route path="/hostel" element={<Hostel />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/cse/research" element={<Research />}/>
        <Route path="/announcement" element={<Announcement/>}/>
        <Route path="/fees_payment" element={<Fees_payment/>}/>
        <Route path="/academic-calender" element={<AcademicCalender/>}/>
        <Route path="/time_table" element={<TimeTable/>}/>
        <Route path="/international_research" element={<InternationalResearch/>}/>
        <Route path="/conferences" element={<Conferences/>}/>
        <Route path="/admissions/ug" element={<Admission/>}/>


        {/* <Route path="/bs/faculty" element={<Faculty faculties={bsFaculties} hod={bsHod} header={bsHeader} />} />



        <Route path="/cse/faculty" element={<Faculty faculties={cseFaculties} hod={cseHod} header={cseHeader} />} />



        <Route path="/ece/faculty" element={<Faculty faculties={eceFaculties} hod={eceHod} header={eceHeader} />} /> */}

        <Route
          path="/ece/projects"
          element={
            <Projects
              Upcomingprojects={eceUpcomingProjects}
              Completedprojects={eceCompletedProjects}
              headerImg={eceHeaderImg}
            />
          }
        />

        <Route
          path="/cse/projects"
          element={
            <Projects
              Upcomingprojects={cseUpcomingProjects}
              Completedprojects={cseCompletedProjects}
              headerImg={cseHeaderImg}
              consultancyProjects={consultancyProjects}
            />
          }
        />

        <Route
          path="/events"
          element={
            <Events
              Pastevents={Pastevents}
              UpcomingEvents={UpcomingEvents}
              headerImg={eceHeaderImg}
            />
          }
        />

        <Route
          path="/governance/:committee"
          element={<Governance headerImg={eceHeaderImg} />}
        />

        <Route path="/:dept/about" element={<DepartmentPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
