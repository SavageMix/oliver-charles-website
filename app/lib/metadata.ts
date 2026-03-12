// Helper to generate metadata with self-referencing canonical URL
const BASE_URL = "https://www.olivercharlesgardendesign.com";

interface MetadataParams {
  title?: string;
  description?: string;
}

export function generateCanonicalMetadata(path: string = "", params?: MetadataParams) {
  const canonicalUrl = path === "/" || path === "" 
    ? BASE_URL 
    : `${BASE_URL}${path}`;
  
  const defaultTitle = "Oliver Charles Garden Design & Build | Landscaping Amersham";
  const defaultDescription = "Family-run garden design and build specialists in Amersham, Buckinghamshire. Expert installation of porcelain patios, composite decking & glass balustrades. Free quotes, 5-year guarantee.";
  
  return {
    title: params?.title || defaultTitle,
    description: params?.description || defaultDescription,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export { BASE_URL };
