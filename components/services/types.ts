export interface ServiceList {
    name: string;
    url: string;
    image: string;
    video: string;
  }

export type ServiceListProps = {
    services: ServiceList[];
} 
