interface MenuItems {
  key: number;
  name: string;
  where: string;
}

export const menuItems: MenuItems[] = [
  {
    key: 1,
    name: "Schedule",
    where: "/schedule",
  },
  {
    key: 2,
    name: "Sponsors",
    where: "sponsors",
  },
  {
    key: 3,
    name: "Speakers",
    where: "/speakers",
  },
  {
    key: 4,
    name: "Partner With Us",
    where: "#",
  },
  {
    key: 5,
    name: "Contact",
    where: "mailto:hello@codespaceafrica.com",
  },
];
