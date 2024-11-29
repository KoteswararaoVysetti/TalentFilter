"use client";
import { Button } from "@mui/material";
import Dropdown from "../Dropdown";
import { FileUpload } from "../FileUpload/FileUpload";
import { MultiSelectDropdown } from "../MultiSelectDropdown";
import { useRouter } from "next/navigation";
import { updateResults } from "@/lib/features/ResultsSlice";
import { useAppDispatch } from "@/lib/hooks";
import "./UploadForm.scss";

export default function UploadForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const formdata = new FormData();
  const uploadResume = async (formdata: FormData) => {
    const requestOptions = {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: formdata,
    };
    try {
      const response = await fetch("/api/data", requestOptions);

      if (!response.ok) {
        throw new Error("An error occured");
      }
      return await response.json();
    } catch (ex) {
      console.log("Error fetching data:", ex);
      return null;
    }
  };

  const handleOnChange = (value: string) => {
    formdata.append("role", value);
  };

  const handleSkillsOnChange = (value: any) => {
    formdata.append("skills", value);
  };

  const handleFileChange = (value: any) => {
    formdata.append("file", value);
  };

  return (
    <div className="wrapper flex flex-col justify-center	items-center m-2.5">
      <div className="container w-2/4	h-4/5	flex flex-col justify-center items-center overflow-auto">
        <form className="flex flex-col gap-20">
          <div>
            <MultiSelectDropdown
              label={"Skills"}
              list={[
                { id: 1, name: ".Net" },
                { id: 2, name: "Java" },
                { id: 3, name: "React" },
                { id: 4, name: "SQL" },
                { id: 5, name: "Python" },
              ]}
              onChange={handleSkillsOnChange}
            />
            <Dropdown
              label={"Role"}
              list={[{ id: 1, value: "Full stack Developer" }]}
              onChange={handleOnChange}
            />
            <FileUpload onChange={handleFileChange} />
          </div>
          <Button
            variant="contained"
            sx={{ width: "300px", margin: "8px", background: "#2fbea9" }}
            onClick={async () => {
              var response = await uploadResume(formdata);
              if (response) {
                dispatch(updateResults(response));
                router.push("/Results");
              }
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
