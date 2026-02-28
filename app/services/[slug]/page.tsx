import { notFound } from "next/navigation";

import { services } from "@/lib/content";
import { servicePhotos } from "@/lib/servicePhotos";

import ServiceDetailClient from "@/app/services/[slug]/ServiceDetailClient";

type PageProps = {
  params: { slug: string };
};

export default function ServiceDetailPage({ params }: PageProps) {
  const { slug } = params;

  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  const photos = servicePhotos[slug] ?? [];

  return <ServiceDetailClient service={service} photos={photos} />;
}