import { useState } from "preact/hooks";
import { useNavigate } from "react-router-dom";
import { UploadIcon } from "@heroicons/react/solid";
import { useAtom } from "jotai";
import { fileAtom } from "../../store";

// TODO support drag & drop
// TODO filter file extensionn

const FileUploader = () => {
  const navigate = useNavigate();
  const [_, setFile] = useAtom(fileAtom);

  const selectFile = async (e) => {
    const selectedFile = e.target.files[0];
    const text = await selectedFile.text();

    setFile({
      name: selectedFile.name,
      size: selectedFile.size,
      json: JSON.parse(text),
    });

    navigate("/statistics");
  };

  return (
    <div class="flex flex-col items-center justify-center mt-8 mb-2">
      <label class="block group max-w-xl border-4 border-dashed rounded-lg border-purple-300 hover:border-white cursor-pointer">
        <div class="flex flex-col items-center justify-center p-6">
          <UploadIcon className="h-8 w-8 text-purple-300 group-over:text-white" />
          <p class="pt-1 text-md tracking-wider text-purple-300 group-hover:text-white">
            Select your <code>message.json</code> file
          </p>
        </div>
        <input type="file" class="hidden" onChange={(e) => selectFile(e)} onDrop={(e) => console.log("ici", e)} />
      </label>
    </div>
  );
};

export default FileUploader;
