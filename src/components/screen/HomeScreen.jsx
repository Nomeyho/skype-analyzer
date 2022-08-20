import FileUploader from "../file/FileUploader";
import Layout from "../layout/Layout";

const HomeScreenHeader = () => (
  <div className="flex flex-col items-center justify-center mt-8">
    <h1 class="text-4xl tracking-tight font-bold text-white">
        Skype Analyzer
      </h1>
      <h2 class="text-3xl tracking-tight text-purple-300 mt-2">
        Get insights on your Skype conversations
      </h2>
    <FileUploader />
  </div>
);

const HomeScreenContent = () => <div>Content</div>;

const HomeScreen = () => (
  <Layout header={<HomeScreenHeader />} content={<HomeScreenContent />} />
);

export default HomeScreen;
