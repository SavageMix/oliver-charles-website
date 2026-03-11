import { generateCanonicalMetadata } from "../../lib/metadata";
export const metadata = generateCanonicalMetadata("/services/garden-landscaping");

import PageContent from "./PageContent";

export default function Page() {
  return <PageContent />;
}
