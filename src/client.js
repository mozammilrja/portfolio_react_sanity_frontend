import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "kucnnovr",
  dataset: 'production',
  useCdn: true,
  token: "skmd7Sc3H6pSR41CyocpvK8I8ykoulCd0H4Y4h0L0I19Efj5WJemiHdM5lz1YYDkvqfyCmmKxQXnS0PjaBmSIVuV2xtivSmlFqq0Na5DIjqWwqn8KPDzoS0bwHUzlhApUOFzQtwe4vMCe6kVvwb26PVE7yKyrfB4Ax13JC9ao5QPXFTJHfFo",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
