"use client";
import { Button } from "@mui/material";
import Dropdown from "../Dropdown";
import { FileUpload } from "../FileUpload/FileUpload";
import { MultiSelectDropdown } from "../MultiSelectDropdown";
import { useRouter } from "next/navigation";
import "./UploadForm.scss";

export default function UploadForm() {
  const router = useRouter();

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
            />
            <Dropdown
              label={"Role"}
              list={[{ id: 1, value: "Full stack Developer" }]}
            />
            <FileUpload />
          </div>
          <Button
            variant="contained"
            sx={{ width: "300px", margin: "8px", background: "#2fbea9" }}
            onClick={() => {
              router.push("/Results");
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
