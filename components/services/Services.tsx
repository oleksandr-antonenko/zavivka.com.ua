import ServiceCard from "@/components/services/ServiceCard";

export interface Service {
  name: string;
  url: string;
  image: string;
  video: string;
}
const services: Service[] = [
  {
    name: "Завивка волосся",
    image: "zavivka.jpg",
    video: "zavivka.mp4",
    url: "zavivka",
  },
  {
    name: "Стрижка кудрів",
    image: "haircut.jpg",
    video: "haircut.mp4",
    url: "haircut",
  },
  // Добавьте другие услуги аналогично
];
export function Services() {
  return (
    <section>
      <div className="section-block relative">
        <div className="circle-grey top-0 right-0 circle-right"></div>
        <div className="with-circle">
          <div className="section-header">
            <h2>
              Все для кучерявих і тих,
              <br />
              хто хоче ними стати
            </h2>
            <h3>Пропонуємо лише ті послуги, в яких ми найкращі</h3>
            <div className="flex"></div>
          </div>
          <div className="section-body">
            {services.map((service) => (
              <ServiceCard
                url={service.url}
                name={service.name}
                image={service.image}
                video={service.video}
                key={service.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
