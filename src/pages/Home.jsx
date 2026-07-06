import React from "react";
import Hero from "../components/hero";



import ProblemSection from "../components/ProblemSection";
import AuthorityDashboard from "../components/AuthorityDashboard";
import CaseStudies from "../components/CaseStudies";
import FinalCTA from "../components/FinalCTA";
import Solutions from "../components/Solutions";
import ContactPage from "../components/ContactPage";


const Home = () => {
  return (
    <div>
        <Hero/>
        <ProblemSection/>
        <Solutions/>
        <AuthorityDashboard/>
        <ContactPage/>
        <CaseStudies/>
        <FinalCTA/>
        
    </div>
  )
}

export default Home