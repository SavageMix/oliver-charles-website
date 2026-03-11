import { generateCanonicalMetadata } from "../../lib/metadata";
export const metadata = generateCanonicalMetadata("/services/composite-decking");

import PageContent from "./PageContent";

export default function Page() {
  return <PageContent />;
}
