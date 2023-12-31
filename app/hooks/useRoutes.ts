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
            href: "/orders/details",
            active: pathname === "/orders/details",
          },
        ],
      },
      {
        label: "Customers",
        href: "#",
        icon: Icons.customer,
        menu: [
          {
            label: "All Customers",
            href: "/customers",
            active: pathname === "/customers",
          },
          {
            label: "Customer Details",
            href: "/customers/details",
            active: pathname === "/customers/details",
          },
          {
            label: "Add Customer",
            href: "/customers/add",
            active: pathname === "/customers/add",
          },
        ],
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
