"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { updateResults } from "@/src/lib/features/ResultsSlice";
import { useAppDispatch } from "@/src/lib/hooks";
import "./style.scss";
import Dropdown from "../components/ui/Dropdown";
import { MultiSelectDropdown } from "../components/ui/MultiSelectDropdown";
import { FileUpload } from "../components/ui/FileUpload/FileUpload";
import { useCallback, useState } from "react";
import { Endpoints } from "@/src/common/constants";

const Skills = [
    { id: 1, name: ".Net" },
    { id: 2, name: "Java" },
    { id: 3, name: "React" },
    { id: 3, name: "SignalR" },
    { id: 3, name: "Angular" },
    { id: 3, name: "TypeScript" },
    { id: 3, name: "Azure" },
    { id: 3, name: "AWS" },
    { id: 3, name: "PostgreSQL" },
    { id: 4, name: "SQL" },
    { id: 5, name: "Python" },
  ];
const Roles = [{ id: 1, value: ".Net Fullstack Developer" }, { id: 2, value: "Python Fullstack Developer" }];

export default function UploadForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [role, setRole] = useState<string | null>(null);
  const [skills, setSkills] = useState(null);
  const [resume, setResume] = useState<File | null>(null);

  const formSubmit = useCallback(async () => {
    if(!role || !skills || !resume) {
        console.log(role, skills, resume)
        return;
    }
    async function UploadResume(role: string, skills: string, file: File) {
        const formdata = new FormData();
        formdata.append('role', role);
        formdata.append('skills', skills);
        formdata.append('file', file, file.name, );
        console.log(formdata);
        const requestOptions = {
          method: "POST",
          body: formdata,
        };
        try {
          const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}${Endpoints.ProcessResume}`; 
          console.log(formdata);
          const response = await fetch(url, requestOptions);
            console.log(response);
            
          if (!response.ok) {
            throw new Error("An error occured");
          }
          const res = await response.json();
          console.log(res);
          return res;
        } catch (ex) {
          console.log("Error fetching data:", ex);
          return null;
        }
      }
  const response = await UploadResume(role, skills, resume);
  if (response) {
    dispatch(updateResults(response));
    router.push("/results");
  }
}, [role, skills, resume])

  return (
    <div className="wrapper flex flex-col justify-center	items-center m-2.5">
      <div className="container w-2/4	h-4/5	flex flex-col justify-center items-center overflow-auto">
        <form className="flex flex-col gap-20">
          <div>
            <MultiSelectDropdown
              label={"Skills"}
              list={Skills}
              onChange={setSkills}
            />
            <Dropdown
              label={"Role"}
              list={Roles}
              onChange={val => {setRole(Roles.find(s => s.id == val)?.value || null)}}
            />
            <FileUpload onChange={setResume} />
          </div>
          <Button
            variant="contained"
            sx={{ width: "300px", margin: "8px", background: "#2fbea9" }}
            onClick={formSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
