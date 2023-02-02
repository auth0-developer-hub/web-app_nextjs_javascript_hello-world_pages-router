import Link from "next/link";
import { useRouter } from "next/router";

export const NavBarTab = ({ path, label }) => {
  const router = useRouter();
  const isRouteActive = (path) => router.pathname === path;

  let navBarTabClassName = "nav-bar__tab";

  if (isRouteActive(path)) {
    navBarTabClassName += " nav-bar__tab--active";
  }

  return (
    <Link href={path} className={navBarTabClassName}>
      {label}
    </Link>
  );
};
