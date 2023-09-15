import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "photo-album-showcase",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {});
      stack.addOutputs({
        SiteUrl: site.customDomainUrl || site.url,
      });
    });
  },
} satisfies SSTConfig;