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
  
  const defaultTitle = "Oliver Charles Garden Design & Build | Landscape Construction & Builders Amersham";
  const defaultDescription = "Bespoke hard landscaping and complete garden construction contractors in Amersham. Specializing in luxury porcelain paving, retaining brickwork, and turfing works.";
  
  return {
    title: params?.title || defaultTitle,
    description: params?.description || defaultDescription,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export { BASE_URL };
