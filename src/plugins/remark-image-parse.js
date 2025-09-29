import { visit } from "unist-util-visit";
import path from "path";

export default function () {
    return async (ast, vfile) => {
        visit(ast, "image", (node, index, parent) => {
            if (node.url && (node.url.startsWith("./assets/") || node.url.startsWith("./Assets/"))) {
                node.url = `pathname:///instruction-assets/${getRelativePath(vfile.path)}/${node.url.slice(9)}`;
            }
        });
    };
};

/**
 * @param {string} vfilePath
 */
function getRelativePath(vfilePath)
{
    const pathItems = vfilePath.split(path.sep);
    if (vfilePath.includes("\\versions\\") || vfilePath.includes("/versions/"))
    {
        return pathItems.slice(-4, -1).join("/");
    } else {
        return pathItems[pathItems.length - 2];
    }
}