import { visit } from "unist-util-visit";

export default function () {
    return async (ast) => {
        let tocFound = false;

        visit(ast, (node, index, parent) => {
            if (node.type === "heading" && node.depth === 2) {
                if (!tocFound) {
                    tocFound = true;
                    parent.children.splice(index, 1);
                    return index;
                } else {
                    return false;
                }
            }

            if (!tocFound) return;
            parent.children.splice(index, 1);
            return index;
        });
    };
};