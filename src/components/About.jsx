import React from "react";
import about from "./data/About.json"

const About = () => {
  return (
    <>
      <div className="container ex" id="about">
        <h1 className="padding">ABOUT ME</h1>
        {about.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
            <div className="about">
                  <h2>{data.role}</h2>
                  <h5 style={{ color: "yellow" }}>{data.program}</h5>
                  <h5 style={{ color: "yellow" }}>{data.college}</h5>
                   <h5 style={{ color: "yellow" }}>{data.Course}</h5>
                   <h5 style={{ color: "yellow" }}>{data.years}</h5>
                 

                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default About ;