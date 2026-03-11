import { generateCanonicalMetadata } from "../lib/metadata";
export const metadata = generateCanonicalMetadata("/projects");

import PageContent from "./PageContent";

export default function Page() {
  return <PageContent />;
}
