export type NavProps = {
  linkNav: string;
  titleNav: string;
};

export interface NavProp {
  navlinks: NavProps[];
  show: string;
  closeMobileMenu?: () => void;
}
