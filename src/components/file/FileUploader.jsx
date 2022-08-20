import { useState } from "preact/hooks";
import { useNavigate } from "react-router-dom";
import { UploadIcon } from "@heroicons/react/solid";
import { useAtom } from "jotai";
import { fileAtom } from "../../store";
import classNames from "classnames";

const FileUploader = () => {
  const navigate = useNavigate();
  const [_, setFile] = useAtom(fileAtom);
  const [hover, setHover] = useState(false);
  const [drag, setDrag] = useState(false);
  const highlight = hover || drag;

  const uploadFile = async (e) => {
    e.preventDefault();
    const selectedFile = e.target.files ? e.target.files[0] : e.dataTransfer.files[0];
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
      <label
        onDragOver={(e) => { setDrag(true); e.preventDefault() }}
        onDrop={uploadFile}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onDragLeave={() => setDrag(false)}
        className={classNames(
          "block max-w-xl border-4 border-dashed rounded-lg cursor-pointer transition-colors",
          { "border-white": !highlight, "border-purple-300": highlight }
        )}
      >
        <div class="flex flex-col items-center justify-center p-6 transition-colors" >
          <UploadIcon
            className={classNames("h-8 w-8 ", {
              "text-white": !highlight,
              "text-purple-300": highlight
            })}
          />
          <p
            className={classNames(
              "pt-1 text-md tracking-wider transition-colors",
              {
                "text-white": !highlight,
                "text-purple-300": highlight
              }
            )}
          >
            Upload your <code>messages.json</code> file
          </p>
        </div>
        <input type="file" class="hidden" onChange={uploadFile} />
      </label>
    </div>
  );
};

export default FileUploader;
