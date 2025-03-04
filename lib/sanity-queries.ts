// lib/sanity-queries.ts

import {
  Blog,
  Certification,
  client,
  Experience,
  Project,
} from "@/sanity/lib/client";

/**
 * Fetch all projects with basic information
 */
export async function getAllProjects(): Promise<Project[]> {
  return client.fetch(`
    *[_type == "project"] | order(title asc) {
      title,
      description,
      "slug": slug.current,
      externalLink,
      "thumbnail": thumbnail.asset->url,
      technologies
    }
  `);
}

/**
 * Fetch a single project by slug with complete details
 */
export async function getProject(slug: string): Promise<Project | null> {
  const results = await client.fetch(
    `
    *[_type == "project" && slug.current == $slug][0] {
      title,
      description,
      "slug": slug.current,
      externalLink,
      "thumbnail": thumbnail.asset->url,
      body,
      technologies,
    }
  `,
    { slug }
  );

  return results || null;
}

export async function getAllBlogs(): Promise<Blog[]> {
  return client.fetch(`
    *[_type == "blog"] | order(title asc) {
        title,
        "slug": slug.current,
        date,
        tags,
        body
    }
  `);
}

export async function getBlog(slug: string): Promise<Blog | null> {
  const results = await client.fetch(
    `
    *[_type == "blog" && slug.current == $slug][0] {
        title,
        date,
        tags,
        body
    }
  `,
    { slug }
  );

  return results || null;
}
export async function getAllCertifications(): Promise<Certification[]> {
  return client.fetch(`
    *[_type == "certification"] | order(order asc) {
    name,
    issuer,
    description,
    date,
    credentialLink,
    }
  `);
}
export async function getAllExperiences(): Promise<Experience[]> {
  return client.fetch(`
    *[_type == "experience"] | order(order asc) {
     company,
     jobTitle,
     description,
    startDate,
     endDate,
    isCurrentPosition,
    }
  `);
}
