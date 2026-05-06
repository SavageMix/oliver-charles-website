import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects, getProjectBySlug, getRelatedProjects } from "../../lib/projects";
import { BASE_URL } from "../../lib/metadata";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return {
      title: "Project Not Found | Oliver Charles Garden Design",
    };
  }

  const title = `${project.title} | ${project.category} in ${project.location} | Oliver Charles`;
  const description = `${project.description} View our ${project.category.toLowerCase()} portfolio for ${project.location}.`;
  const canonicalUrl = `${BASE_URL}/projects/${project.slug}/`;
  const ogImage = project.images[0];

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Oliver Charles Garden Design",
      images: [{
        url: `${BASE_URL}${ogImage}`,
        width: 1200,
        height: 900,
        alt: `${project.title} - ${project.category} in ${project.location}`,
      }],
      locale: "en_GB",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}${ogImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project, 3);

  return <ProjectDetailClient project={project} relatedProjects={relatedProjects} />;
}
