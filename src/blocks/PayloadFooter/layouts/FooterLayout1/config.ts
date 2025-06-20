import { button } from "@/fields/button"
import { link } from "@/fields/link"
import { findImageByFilename } from "@lib/util/findImageByFilename"
import type { Block } from "payload"

export const FooterLayout1: Block = {
  slug: "footer1",
  interfaceName: "FooterLayout1",
  imageURL:
    "https://minio.thespecialcharacter.com/payload-website-templates/thumbnail_footerLayout1.png",
  fields: [
    {
      name: "newsletter",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Newsletter Title",
          defaultValue: "Newsletter",
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          label: "Newsletter Description",
          defaultValue:
            "Get our latest news and promo updates directly to your email address every month.",
        },
        button(),
      ],
    },
    {
      name: "address",
      type: "group",
      fields: [
        {
          name: "logo",
          type: "upload",
          relationTo: "media",
          required: true,
          defaultValue: async ({ req }) => findImageByFilename(req, "Logo.svg"),
        },
        {
          name: "location",
          type: "text",
          required: true,
          label: "Location",
          defaultValue: "123 Main Street Chicago, IL 60601 United States",
        },
        {
          name: "phone",
          type: "text",
          required: true,
          label: "Phone",
          defaultValue: "+1 (234) 567 890",
        },
        {
          name: "email",
          type: "text",
          required: true,
          label: "E-Mail",
          defaultValue: "hello@peterdraw.co",
        },
      ],
    },
    {
      name: "footerLinks",
      type: "array",
      label: "Footer Links",
      maxRows: 3,
      defaultValue: [
        {
          title: "Products",
          items: [
            { link: { label: "Earrings" } },
            { link: { label: "Necklace" } },
            { link: { label: "Bracelet" } },
            { link: { label: "Ring" } },
            { link: { label: "Brooche" } },
            { link: { label: "Men's Jewelry" } },
          ],
        },
        {
          title: "Company",
          items: [
            { link: { label: "About Us" } },
            { link: { label: "Testimonials" } },
            { link: { label: "Best Seller" } },
            { link: { label: "New Arrivals" } },
            { link: { label: "Terms" } },
            { link: { label: "Licenses" } },
          ],
        },
        {
          title: "Support",
          items: [
            { link: { label: "Size Charts" } },
            { link: { label: "Payment Guide" } },
            { link: { label: "Help Centre" } },
            { link: { label: "Privacy Policy" } },
            { link: { label: "Return Policy" } },
            { link: { label: "FAQs" } },
          ],
        },
      ],
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          label: "Section Title",
        },
        {
          name: "items",
          type: "array",
          required: true,
          label: "Items",
          fields: [link()],
        },
      ],
    },
    {
      name: "legalLinks",
      type: "group",
      fields: [
        {
          name: "links",
          type: "array",
          maxRows: 4,
          defaultValue: [
            { link: { label: "Privacy Policy" } },
            { link: { label: "Terms & Conditions" } },
            { link: { label: "Sitemap" } },
          ],
          fields: [link()],
          required: true,
        },
        {
          name: "images",
          type: "array",
          maxRows: 5,
          defaultValue: async ({ req }) => {
            const footerData = [
              { imageFile: "headerlayout1_footerImage1.png" },
              { imageFile: "headerlayout1_footerImage2.png" },
              { imageFile: "headerlayout1_footerImage3.png" },
              { imageFile: "headerlayout1_footerImage4.png" },
            ]

            const footerImages = await Promise.all(
              footerData.map(async (footer) => {
                const image = await findImageByFilename(req, footer.imageFile)
                return {
                  image,
                }
              })
            )

            return footerImages
          },
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
