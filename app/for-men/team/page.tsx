import { Contacts } from "@/components/contacts";
import { FAQ } from "@/components/faq";
import { TeamInfo } from "@/components/team";

export default function Team() {
    return (
        <>
        <TeamInfo forMen/>
        <FAQ/>
        <Contacts/>
        </>
    );
}
