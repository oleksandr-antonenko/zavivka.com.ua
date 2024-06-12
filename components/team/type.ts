import { MemberOfTeam } from "@/store/type";

export type MemberProps = {
    teamMembers: MemberOfTeam[];
    forMen?: boolean;
    setFullInfo: (i:boolean) => void;
    fullInfo: boolean;
}

export type MemberFullProps = {
    forMen?: boolean; 
    member: MemberOfTeam | null; 
    close: (i:boolean) => void;
}

