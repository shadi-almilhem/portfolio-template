/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  name: "certification",
  title: "Certification",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Certificate Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "issuer",
      title: "Issuing Organization",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "date",
      title: "Issue Date",
      type: "date",
      options: {
        dateFormat: "MMMM YYYY",
      },
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: "credentialLink",
      title: "Credential Link",
      description: "URL to verify the credential",
      type: "url",
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
      title: "name",
      issuer: "issuer",
      date: "date",
    },
    prepare(selection: { title: string; issuer: string; date: string }) {
      const { title, issuer, date } = selection;
      return {
        title,
        subtitle: `${issuer} • ${date ? new Date(date).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : ""}`,
      };
    },
  },
};
