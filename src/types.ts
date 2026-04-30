export type CityOption = {
  code: string;
  name: string;
};

export type NavItem = {
  label: string;
  active?: boolean;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
};

export type DealItem = {
  route: string;
  date: string;
  price: number;
  discount: string;
  image: string;
};

export type FooterGroup = {
  title: string;
  links: string[];
};
