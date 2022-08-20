import FileUploader from "../file/FileUploader";
import Layout from "../layout/Layout";

const HomeScreenHeader = () => (
  <>
    <h1 class="flex flex-col items-center justify-center mt-8">
      <span class="text-4xl tracking-tight font-bold text-white">
        Skype Analyzer
      </span>
      <span class="text-3xl tracking-tight text-purple-300 mt-2">
        Get insights on your Skype conversations
      </span>
    </h1>
    <FileUploader />
  </>
);

const HomeScreenContent = () => <div>Content</div>;

const HomeScreen = () => (
  <Layout header={<HomeScreenHeader />} content={<HomeScreenContent />} />
);

export default HomeScreen;
