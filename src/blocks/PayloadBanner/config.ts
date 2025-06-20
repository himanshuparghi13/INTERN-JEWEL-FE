import { Block } from "payload"
import { BannerLayout1 } from "./layouts/BannerLayout1/config"
import { BannerLayout2 } from "./layouts/BannerLayout2/config"
import { BannerLayout3 } from "./layouts/BannerLayout3/config"

export const PayloadBanner: Block = {
  slug: "payloadBanner",
  admin: {
    group: "Banner",
  },
  fields: [
    {
      name: "PayloadBanner",
      type: "blocks",
      blocks: [BannerLayout1, BannerLayout2 ,BannerLayout3],
      defaultValue: [{blockType: "bannerLayout1"}],
      maxRows: 1,
      required: true,
    },
  ],
  interfaceName: "BannerLayout3",
}
