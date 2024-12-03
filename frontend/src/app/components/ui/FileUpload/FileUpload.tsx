"use client";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";
import CancelIcon from "@/src/assets/svg/close.svg";
import "./FileUpload.scss";

export const FileUpload = (props: { onChange?: (value: File) => any }) => {
  const [file, setFile] = useState<string>();
  const [fileName, setFileName] = useState<string>("");
  const inputRef = useRef(null);

  return (
    <div>
      <input
        id="file"
        ref={inputRef}
        type="file"
        className="hidden"
        accept=".pdf"
        onChange={(e) => {
          let files = e.target.files;
          if (files && files[0]) {
            let blobUrl = URL.createObjectURL(files[0]);
            setFile(blobUrl);
            setFileName(files[0]?.name);
            props?.onChange(files[0]);
          }
        }}
      />
      <div className="w-fit h-12	flex m-2">
        {!file && (
          <Button
            sx={{ width: "300px", border: "1px solid #e5e7eb" }}
            onClick={() => {
              (inputRef.current as any).click();
            }}
            className="upload-button"
            id="upload-button"
          >
            Upload your Resume
          </Button>
        )}
        {file && file.length > 0 && (
          <div
            className="flex items-center gap-2 text-gray-500 text-sm filename-section "
            title={fileName}
          >
            <>
              <span
                className="file-name cursor-pointer"
                onClick={() => {
                  (inputRef.current as any).click();
                }}
              >
                {fileName}{" "}
              </span>
              <span>
                <CancelIcon
                  stroke="rgb(107 114 128)"
                  className="cursor-pointer"
                  onClick={() => {
                    setFile("");
                    setFileName("");
                  }}
                />
              </span>
            </>
          </div>
        )}
      </div>
    </div>
  );
};
