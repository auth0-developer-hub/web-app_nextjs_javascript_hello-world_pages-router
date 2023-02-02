import { useRouter } from "next/router";
import Link from "next/link";

export const MobileNavBarTab = ({ path, label, handleClick }) => {
  const router = useRouter();
  const isRouteActive = (path) => router.pathname === path;

  let mobileNavBarTabClassName = "mobile-nav-bar__tab";

  if (isRouteActive(path)) {
    mobileNavBarTabClassName += " mobile-nav-bar__tab--active";
  }

  return (
    <Link
      href={path}
      className={mobileNavBarTabClassName}
      onClick={handleClick}
    >
      <div>{label}</div>
    </Link>
  );
};
