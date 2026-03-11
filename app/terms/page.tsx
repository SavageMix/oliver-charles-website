import { generateCanonicalMetadata } from "../lib/metadata";
export const metadata = generateCanonicalMetadata("/terms");

import PageContent from "./PageContent";

export default function Page() {
  return <PageContent />;
}
