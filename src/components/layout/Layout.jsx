import Navbar from "./Navbar";

const Layout = ({ header, content }) => (
  <>
    <header class="bg-gradient-to-r from-sky-600 to-sky-400 py-8 px-8">
      <Navbar />
      {header}
    </header>
    {content}
  </>
);

export default Layout;
