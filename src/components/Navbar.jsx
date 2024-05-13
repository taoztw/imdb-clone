import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <div className="flex gap-8 justify-center bg-amber-100 dark:bg-gray-600 dark:text-gray-200 p-4 lg:text-lg">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}

export default Navbar;
