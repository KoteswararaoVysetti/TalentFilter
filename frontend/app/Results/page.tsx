"use client";
import "./Results.scss";
import ProgressBar from "../ui/ProgressBar";
import CustomAccordion from "../ui/Accordion";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
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
              <ul>
                {data.matched_skills.map((val, index) => (
                  <li key={index}>{val}</li>
                ))}
              </ul>
            }
          />
          <CustomAccordion
            title="Missing Skills"
            content={
              <ul>
                {data.missed_skills.map((val, index) => (
                  <li key={index}>{val}</li>
                ))}
              </ul>
            }
          />
          <CustomAccordion
            title="Additional Skills"
            content={
              <ul>
                {data.additional_skills.map((val, index) => (
                  <li key={index}>{val}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
}
