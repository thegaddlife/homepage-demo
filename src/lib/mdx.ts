import remarkGfm from "remark-gfm";
import { type PluggableList } from "unified";

const remarkPlugins: PluggableList = [remarkGfm];

export const plugins = {
  remarkPlugins,
};
