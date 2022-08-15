import { SunIcon, TranslateIcon } from "@heroicons/react/solid";

const Navbar = () => (
  <nav class="flex items-center justify-end">
    <SunIcon className="h-6 w-6 text-white hover:text-purple-300 cursor-pointer mr-6" />
    <TranslateIcon className="h-6 w-6 text-white hover:text-purple-300 cursor-pointer" />
  </nav>
);

export default Navbar;
