import { generateCanonicalMetadata } from "../lib/metadata";
export const metadata = generateCanonicalMetadata("/privacy-policy");

import PageContent from "./PageContent";

export default function Page() {
  return <PageContent />;
}
