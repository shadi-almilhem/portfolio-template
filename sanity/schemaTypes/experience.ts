/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */

export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "company",
      title: "Company Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Role Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
      options: {
        dateFormat: "MMMM YYYY",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
      options: {
        dateFormat: "MMMM YYYY",
      },
    },
    {
      name: "isCurrentPosition",
      title: "Current Position",
      description: "Check if this is your current position",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description:
        "Use this to set the display order (lower numbers appear first)",
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "jobTitle",
      company: "company",
      startDate: "startDate",
      endDate: "endDate",
      isCurrentPosition: "isCurrentPosition",
    },
    prepare(selection: {
      title: string;
      company: string;
      startDate: string;
      endDate: string;
      isCurrentPosition: boolean;
    }) {
      const { title, company, startDate, endDate, isCurrentPosition } =
        selection;
      const start = startDate
        ? new Date(startDate).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })
        : "";
      const end = isCurrentPosition
        ? "Present"
        : endDate
          ? new Date(endDate).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })
          : "";

      return {
        title: `${title} at ${company}`,
        subtitle: start && end ? `${start} - ${end}` : start,
      };
    },
  },
};
