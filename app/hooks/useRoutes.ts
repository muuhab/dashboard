import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { Icons } from "@/app/components/ui/Icons";

const useRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Overview",
        href: "/overview",
        icon: Icons.dashboard,
        active: pathname === "/overview",
      },
      {
        label: "Product",
        href: "#",
        icon: Icons.product,
        menu: [
          {
            label: "All Products",
            href: "/products",
            active: pathname === "/products",
          },
          {
            label: "Categories",
            href: "/categories",
            active: pathname === "/Categories",
          },
          {
            label: "Group",
            href: "/group",
            active: pathname === "/group",
          },
        ],
      },
      {
        label: "Orders",
        href: "#",
        icon: Icons.order,
        menu: [
          {
            label: "Orders",
            href: "/orders",
            active: pathname === "/orders",
          },
          {
            label: "Order Details",
            href: "/order/details",
            active: pathname === "/order/details",
          },
        ],
      },
      {
        label: "Customers",
        href: "/customers",
        icon: Icons.customer,
        active: pathname === "/customers",
      },
      {
        label: "Mange Reviews",
        href: "/reviews",
        icon: Icons.reviews,
        active: pathname === "/reviews",
      },
      {
        label: "Checkout",
        href: "/checkout",
        icon: Icons.checkout,
        active: pathname === "/checkout",
      },
      {
        label: "Settings",
        href: "/settings",
        icon: Icons.settings,
        active: pathname === "/settings",
      },
    ],
    [pathname]
  );
  return routes;
};

export default useRoutes;
