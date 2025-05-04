import { NavProps } from "../main-header";

export interface ButtonLangProps {
  languages: string[];
  onClick?: () => void;
}

export type SelectT = {
  value: string;
  label: string;
};
export interface SelectProps {
  countries: SelectT[];
  name?: string;
  onChangeProps: (e: string) => void;
  choice: string;
  placeholder?: string;
}

export interface TopHeaderLinksProps {
  show: string;
  navlinksTop: NavProps[];
}
