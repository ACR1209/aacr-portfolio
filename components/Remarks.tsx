import { firaCodeFont } from "@/utils/fonts";
import React from "react";
import Remark, { RemarkType } from "./Remark";

const remarks: RemarkType[] = [
    {
        title: "2ND PLACE ON CODE CHALLENGE 2023",
        description: "As part of a collaborative team, I contributed to the development of an AI-powered web service targeting the financial sector. Utilizing NextJS and FastAPI, we were able to create a fully functional solution within a tight deadline of just one day. Our exceptional effort and innovative approach led us to secure the second place in a highly competitive software development competition.",
        imgSrc: '/remark1.jpeg'
    },
    {
        title: "Google Data Analytics Certificate",
        description: "I successfully completed the Google Data Analytics course, where I honed my skills in data analysis, specifically focusing on SQL, R, Excel, and Tableau. As part of the course's capstone project, I conducted a thorough analysis of the power progression in Terraria, a popular game.",
        imgSrc: "/remark2.jpeg"
    }
]

function Remarks() {
  return (
    <section id="remarks" className={`${firaCodeFont.className} text-white bg-black p-5`}>
      <h2 className="text-5xl text-right  lg:text-8xl uppercase font-bold ">Remarks</h2>
      <div>
        {
            remarks.map(r=>(
                <Remark {...r}/>
            ))
        }
      </div>
    
    </section>
  );
}

export default Remarks;
