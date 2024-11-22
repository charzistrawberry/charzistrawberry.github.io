import './services.css'
import { BiCheck } from "react-icons/bi";
import { FaRegCalendarTimes } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdFormatListBulleted } from "react-icons/md";

const Services = () => {
  return (
    <section id="services">
      <h5>Previous Work</h5>
      <h2>History</h2>

      <div className="container services__container">

        <article className="service">
          <div className="service__head">
            <h3>Technology Consultant</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaRegCalendarTimes className="service__list-icon"/>
              <p>June - August 2024</p>
            </li>
            <li>
              <FaLocationDot className="service__list-icon"/>
              <p>FTI Consulting</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Technology Consultant specializing in Digital Forensics, eDiscovery, and Litigation support. Leveraging advanced forensic tools for meticulous investigations and analysis of electronic evidence. Collaborate seamlessly with legal teams to provide strategic insights at the intersection of technology and litigation. Work with high-stakes cases, emphasizing data preservation and cybersecurity.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>IT & Cyberseucirty Analyst</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaRegCalendarTimes className="service__list-icon"/>
              <p>May - August 2023</p>
            </li>
            <li>
              <FaLocationDot className="service__list-icon"/>
              <p>U.S Government Accountability Office</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Analyzed federal agency systems in the Veteran Affairs Electronic Health Record Modernization (EHRM) Scheduleing Systems engagement team. My role involved collaborating closely with government stakeholders, analyzing complex IT infrastructure, and delivering detailed reports to inform decision-making processes. Proven track record in enhancing cybersecurity controls and ensuring compliance with government standards.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Research</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaRegCalendarTimes className="service__list-icon"/>
              <p>May - August 2022</p>
            </li>
            <li>
              <FaLocationDot className="service__list-icon"/>
              <p>New York Institute of Technology</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Conducted Research on the Security of Mobile Devices and Wireless Netowkrs under Dr. Wenjia Li. Created a malware detection approach for the Android system using ensemble learning which invoilved: data collection and decompilation, feature extraction, classification, and model evalutation. Published paper and presented at the 2022 IEEE MIT Undergraduate Technology Research Conference.</p>
            </li>
          </ul>
        </article>

      </div>
    
    
    </section>
  )
}

export default Services