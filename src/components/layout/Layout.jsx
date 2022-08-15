import Navbar from "./Navbar";

const Layout = ({ header, content }) => (
  <>
    <header class="bg-gradient-to-r from-purple-700 to-[#a65fec] py-8 px-8">
      <Navbar />
      <div>{header}</div>
    </header>
    <div>{content}</div>
  </>
);

export default Layout;
