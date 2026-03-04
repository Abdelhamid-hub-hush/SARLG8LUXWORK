import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://g8luxwork.com',
      lastModified: new Date(),
    },
    {
      url: 'https://g8luxwork.com/services',
      lastModified: new Date(),
    },
    {
      url: 'https://g8luxwork.com/realisations',
      lastModified: new Date(),
    },
    {
      url: 'https://g8luxwork.com/contact',
      lastModified: new Date(),
    },
  ]
}