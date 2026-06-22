// Helper to generate metadata with self-referencing canonical URL
const BASE_URL = "https://www.olivercharlesgardendesign.co.uk";

interface MetadataParams {
  title?: string;
  description?: string;
}

export function generateCanonicalMetadata(path: string = "", params?: MetadataParams) {
  const canonicalUrl = path === "/" || path === "" 
    ? BASE_URL 
    : `${BASE_URL}${path}`;
  
  const defaultTitle = "Oliver Charles Garden Design & Build | Bespoke Garden Design Amersham";
  const defaultDescription = "Bespoke garden design & build studio in Amersham, Buckinghamshire. Luxury outdoor transformations including porcelain patios, composite decking & glass balustrades. Premium craftsmanship, free consultations, 5-year guarantee.";
  
  return {
    title: params?.title || defaultTitle,
    description: params?.description || defaultDescription,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export { BASE_URL };
