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

function parseDateToISO(dateStr: string): string {
  const months: Record<string, string> = {
    jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
    jul: '07', aug: '08', sept: '09', sep: '09', oct: '10', nov: '11', dec: '12'
  };
  const parts = dateStr.toLowerCase().trim().split(' ');
  if (parts.length === 2) {
    const month = months[parts[0].replace('.', '')];
    const year = parts[1];
    if (month && year) {
      return `${year}-${month}-01`;
    }
  }
  return dateStr;
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project, 3);

  const projectSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: `${BASE_URL}${project.images[0]}`,
    location: {
      '@type': 'Place',
      name: project.location
    },
    dateCreated: parseDateToISO(project.date),
    provider: {
      '@type': 'LocalBusiness',
      name: 'Oliver Charles Garden Design & Build',
      url: 'https://www.olivercharlesgardendesign.com',
      telephone: '+447837666766',
      email: 'info@ocgardendesign.co.uk',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Suite 103, Unit 5, Chiltern business center, 63-65 Woodside Rd',
        addressLocality: 'Amersham',
        addressRegion: 'Buckinghamshire',
        postalCode: 'HP6 6AA',
        addressCountry: 'GB'
      },
      image: 'https://www.olivercharlesgardendesign.com/og-image.jpg'
    }
  };

  function cleanAuthorName(name: string): string {
    // Strip business-name suffixes that look spammy to Google's filters
    return name
      .replace(/'s Patio$/i, '')
      .replace(/'s Deck$/i, '')
      .replace(/'s Garden$/i, '')
      .trim() || name;
  }

  if (project.testimonial && project.testimonial.quote && project.testimonial.quote.toLowerCase() !== 'tldr') {
    projectSchema['review'] = {
      '@type': 'Review',
      itemReviewed: {
        '@type': 'LocalBusiness',
        name: 'Oliver Charles Garden Design & Build LTD',
        url: 'https://www.olivercharlesgardendesign.com',
        telephone: '+447837666766',
        email: 'info@ocgardendesign.co.uk',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Suite 103, Unit 5, Chiltern business center, 63-65 Woodside Rd',
          addressLocality: 'Amersham',
          addressRegion: 'Buckinghamshire',
          postalCode: 'HP6 6AA',
          addressCountry: 'GB'
        },
        sameAs: [
          'https://www.google.com/maps/place/?q=place_id:ChIJJ--wA6YE_CIRI_NAoevhoAY',
          'https://www.facebook.com/OlivercharlesGardenDesign',
          'https://www.instagram.com/ocgardendesign.uk/'
        ]
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      reviewBody: project.testimonial.quote,
      author: {
        '@type': 'Person',
        name: cleanAuthorName(project.testimonial.author)
      }
    };
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${BASE_URL}/projects/` },
      { '@type': 'ListItem', position: 3, name: project.title, item: `${BASE_URL}/projects/${project.slug}/` }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProjectDetailClient project={project} relatedProjects={relatedProjects} />
    </>
  );
}
