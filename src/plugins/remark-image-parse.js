import { visit } from "unist-util-visit";

export default function () {
    return async (ast, vfile) => {
        const pathArr = vfile.path.split('\\')
        const docid = pathArr[pathArr.length - 2];

        visit(ast, "image", (node, index, parent) => {
            if (node.url && (node.url.startsWith("./assets/") || node.url.startsWith("./Assets/"))) {
                node.url = `pathname:///instruction-assets/${docid}/${node.url.slice(9)}`;
            }
        });
    };
};