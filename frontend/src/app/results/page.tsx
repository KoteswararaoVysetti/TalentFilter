"use client";
import "./style.scss";
import ProgressBar from "../components/ui/ProgressBar";
import CustomAccordion from "../components/ui/Accordion";
import { useAppSelector } from "@/src/lib/hooks";
import { RootState } from "@/src/lib/store";
import { useEffect } from "react";
import { redirect } from "next/navigation";
export default function Page() {
  const data = useAppSelector((state: RootState) => state.results).value;
  useEffect(() => {
    if (!data.matching_score) {
      redirect("/");
    }
  }, [data]);

  return (
    <div className="wrapper flex flex-col justify-center items-center bg-white m-2.5">
      <div className="container w-2/4	h-4/5	flex h-full w-full bg-white gap-10 pt-40">
        <div className="basis-2/4 flex justify-center progress-wrapper">
          <ProgressBar progress={data.matching_score} />
        </div>
        <div className="basis-2/4 flex flex-col h-full skills-wrapper">
          <CustomAccordion
            title="Matched Skills"
            content={
              data.matched_skills.length > 0
                ? data.matched_skills.map((val, index) => (
                    <div className="skills" key={index}>
                      {val}
                    </div>
                  ))
                : "No Data to display"
            }
          />
          <CustomAccordion
            title="Missing Skills"
            content={
              data.missed_skills.length > 0
                ? data.missed_skills.map((val, index) => (
                    <div className="skills" key={index}>
                      {val}
                    </div>
                  ))
                : "No Data to display"
            }
          />
          <CustomAccordion
            title="Additional Skills"
            content={
              data.additional_skills > 0
                ? data.additional_skills.map((val, index) => (
                    <div key={index}>{val}</div>
                  ))
                : "No Data to display"
            }
          />
        </div>
      </div>
    </div>
  );
}
