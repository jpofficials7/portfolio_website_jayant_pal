import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "j3vck5v1",
  dataset: 'production',
  apiVersion: '2022-08-22',
  useCdn: true,
  token: "skjbUvZ8tdfEG9JsqQkhnR388515lQjcx2AiO0JXp56MIZYfleNoeLRwEn9KU1ysWaRSSXpv9s5vsu1xa7wL7DkRQ92mEbHVjA5scsXBBDzvomsebhiHVCfn3jJg9CLDdXi9yWYke2B7KEdGn4n00RMcVmXDVNBMdMmbftgoV3Dpdisxncct" ,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);