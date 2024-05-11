import Link from "next/link";

function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className="hover:text-amber-500">
      <Icon className="sm:hidden text-2xl" />
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
}

export default MenuItem;
