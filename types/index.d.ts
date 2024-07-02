declare type Nav = {
  title: string;
  href: string;
  icon: JSX.Element;
};

declare type Cards = {
  id: number;
  title: string;
  description?: string;
  images: string;
  tag?: string;
  link?: string;
  price: number;
  large?: boolean;
};

declare type SupportDataProps = {
  title: string;
  icon: JSX.Element;
};
