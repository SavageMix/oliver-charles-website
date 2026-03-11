import { generateCanonicalMetadata } from "../lib/metadata";
export const metadata = generateCanonicalMetadata("/testimonials");

import PageContent from "./PageContent";

export default function Page() {
  return <PageContent />;
}
