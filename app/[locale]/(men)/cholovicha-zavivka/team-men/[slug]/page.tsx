import ConsultationContainer from "@/components/consultation/consultation-container";
import { Contacts } from "@/components/contacts";
import { FAQ } from "@/components/faq";
import DynamicTeamForMenContainer from "@/components/FOR-MEN/dynamicPageTeamForMen/dynamic-team-for-men-container";
import { masters } from "@/lib/masters";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const locale = await getLocale();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const canonical = `${baseUrl}/${locale}/cholovicha-zavivka/team-men/${params.slug}`;
  const master = masters.find((m) => m.slug === params.slug);

  if (!master) {
    return {
      title: "Майстер не знайдений",
      description: "Інформація про цього майстра відсутня.",
    };
  }

  // Создаем уникальное описание для каждого мастера
  const uniqueDescription = `${master.name} — професійний ${master.category} з досвідом ${master.experience}. Спеціалізується на чоловічій завивці. Працює з індивідуальним підходом до кожного клієнта, гарантуючи якість та комфорт. Запишіться на консультацію та отримайте професійну пораду.`;

  return {
    title: `${master.name} – ${master.category} | Zavivka Studio`,
    description: uniqueDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${master.name} – ${master.category} | Zavivka Studio`,
      description: uniqueDescription,
      images: [
        {
          url: master.photo,
          width: 1200,
          height: 630,
          alt: `${master.name} – ${master.category}`,
        },
      ],
      type: "profile",
    },
  };
}

const DynamicTeamForMenPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const master = masters.find((m) => m.slug === params.slug);

  if (!master) {
    return null;
  }
  return (
    <>
      <h1 className="sr-only">{`${master.name} – ${master.category} | Zavivka Studio`}</h1>
      <p className="sr-only">
        {`${master.name} — професійний ${master.category} з досвідом ${master.experience}. Майстер працює з індивідуальним підходом, забезпечуючи якість і комфорт для кожного клієнта.`}
      </p>
      <section className="pt-[30px] xl:pt-[150px]">
        <DynamicTeamForMenContainer slug={slug} />
      </section>
      <section className="py-[60px] md:py-[150px]">
        <ConsultationContainer />
      </section>
      <section className="pb-[60px] md:pb-[150px]">
        <FAQ />
      </section>
      <section className="py-[60px] md:py-[150px]">
        <Contacts />
      </section>
    </>
  );
};

export default DynamicTeamForMenPage;
