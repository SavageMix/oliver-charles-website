// Helper to generate metadata with self-referencing canonical URL
const BASE_URL = "https://www.olivercharlesgardendesign.com";

export function generateCanonicalMetadata(path: string = "") {
  const canonicalUrl = path === "/" || path === "" 
    ? BASE_URL 
    : `${BASE_URL}${path}`;
  
  return {
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export { BASE_URL };
