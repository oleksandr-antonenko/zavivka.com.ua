export interface ButtonLangProps {
    languages: string[];
    onClick?: () => void;
}

export type SelectT = {
    value: string;
    label: string;
}
export interface SelectProps {
    countries: SelectT[];
    name?: string;
    onChangeProps: (e: string) => void;
    choice: string;
}
