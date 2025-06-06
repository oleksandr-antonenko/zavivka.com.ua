import { ReactNode } from 'react';

type ButtonTypes = 'submit' | 'reset' | 'button' | undefined;

export interface ButtonLinkProps {
  link: string;
  children: ReactNode;
  type?: ButtonTypes;
  onClick?: () => void;
  className?: string;
}

export interface ButtonProps {
  children: ReactNode;
  type?: ButtonTypes;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}
