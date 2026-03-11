import { generateCanonicalMetadata } from "../../lib/metadata";
export const metadata = generateCanonicalMetadata("/services/glass-balustrades");

import PageContent from "./PageContent";

export default function Page() {
  return <PageContent />;
}
