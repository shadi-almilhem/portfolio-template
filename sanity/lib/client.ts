/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  date: string;
  tags: string[];
  body: any[]; // Sanity portable text
}
export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  externalLink?: string;
  thumbnail?: string;
  body?: any[]; // Sanity portable text
  technologies?: string[];
}
export interface Experience {
  _id: string;
  company: string;
  jobTitle: string;
  description: any[]; // Sanity portable text
  startDate: string;
  endDate?: string;
  isCurrentPosition: boolean;
  location?: string;
  order: number;
}
export interface Certification {
  _id: string;
  name: string;
  issuer: string;
  description?: string;
  date: string;
  expiryDate?: string;
  credentialLink?: string;
  credentialID?: string;
  order: number;
}

export interface About {
  portraitImage: {
    asset: {
      _id: string;
      url: string;
      alt: string;
    };
  };
}
