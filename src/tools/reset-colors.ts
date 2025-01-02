import { ARGS } from "../cli/cli-args";
import filterLabels from "../utils/filter-labels";
import getLabels from "../utils/get-labels";
import colorizeLabels from "./colorize-labels";

export default async function resetColors() {
  // Get all labels.
  const allLabels = await getLabels();

  // Filter for `Price: ` labels first
  const priceLabels = await filterLabels(allLabels, `^Price:.+`);
  // Set `Price: ` labels to green.
  ARGS.color = "1f883d";
  await colorizeLabels(priceLabels);

  // Get all non-price labels (including Priority and Time labels)
  const notPriceLabels = await filterLabels(allLabels, `^(?!Price:.+).+`);
  // Set to grey color.
  ARGS.color = "ededed";
  await colorizeLabels(notPriceLabels);
}
