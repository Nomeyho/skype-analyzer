import FileUploader from "../file/FileUploader";
import Layout from "../layout/Layout";
import { LoginIcon } from "@heroicons/react/outline";

const HomeScreenHeader = () => (
  <div className="flex flex-col items-center justify-center mt-8">
    <h1 class="text-4xl tracking-tight font-bold text-white">Skype Analyzer</h1>
    <h2 class="text-3xl tracking-tight text-sky-200 mt-2">
      Get insights on your Skype conversations
    </h2>
    <FileUploader />
  </div>
);

const HomeScreenContent = () => (
  <div className="m-16 flex flex-col items-center justify-center">
    <h1 class="text-2xl tracking-tight font-bold text-gray-700">How to?</h1>
    <div className="flex flex-wrap flex-row justify-around w-full my-8 max-w-xl">
      <div className="m-2 text-center">
        <div className="text-6xl text-bold text-sky-500">1</div>
        <div className="mt-2 text-gray-600 whitespace-pre-wrap">
          Login to {' '}
          <a href="https://secure.skype.com/en/data-export">
            https://<wbr/>secure<wbr/>.skype<wbr/>.com<wbr/>/en<wbr/>/data-export
          </a>
          {' '} and select "conversations".
        </div>
      </div>
      <div className="m-2 text-center">
        <div className="text-6xl text-bold text-sky-500">2</div>
        <div className="text-center mt-2 text-gray-600">
          Request your Skype conversation export
        </div>
      </div>
      <div className="m-2 text-center">
        <div className="text-6xl text-bold text-sky-500">3</div>
        <div className="text-center mt-2 text-gray-600">
          Download your Skype conversation export when ready
        </div>
      </div>
      <div className="m-2 text-center">
        <div className="text-6xl text-bold text-sky-500">4</div>
        <div className="text-center mt-2 text-gray-600">
          Unzip and upload your <code>message.json</code> here
        </div>
      </div>
    </div>
    <img className="drop-shadow-xl max-w-lg w-full" src="/tutorial_annotated.png" />
  </div>
);

const HomeScreen = () => (
  <Layout header={<HomeScreenHeader />} content={<HomeScreenContent />} />
);

export default HomeScreen;
