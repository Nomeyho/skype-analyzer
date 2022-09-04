import { useState } from "preact/hooks";
import { useNavigate } from "react-router-dom";
import { UploadIcon } from "@heroicons/react/solid";
import { useAtom } from "jotai";
import { fileAtom, selectedConversationAtom } from "../../store";
import classNames from "classnames";

const FileUploader = () => {
  const navigate = useNavigate();
  const [_, setFile] = useAtom(fileAtom);
  const [__, setSelectedConversation] = useAtom(selectedConversationAtom);
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
    
    setSelectedConversation(undefined);
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
          { "border-white": !highlight, "border-sky-200": highlight }
        )}
      >
        <div class="flex flex-col items-center justify-center p-6 transition-colors" >
          <UploadIcon
            className={classNames("h-8 w-8 ", {
              "text-white": !highlight,
              "text-sky-200": highlight
            })}
          />
          <p
            className={classNames(
              "pt-1 text-md tracking-wider transition-colors",
              {
                "text-white": !highlight,
                "text-sky-200": highlight
              }
            )}
          >
            Select your <code>messages.json</code> file.
          </p>
          <p className="text-xs text-sky-200">
          Your data remain in the browser, nothing is uploaded on any server.
          </p>
        </div>
        <input type="file" class="hidden" onChange={uploadFile} />
      </label>
    </div>
  );
};

export default FileUploader;
