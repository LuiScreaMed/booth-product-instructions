import { visit } from "unist-util-visit";

export default function () {
    return async (ast) => {
        visit(ast, 'heading', (node) => {
            let deleteIndexes = [];
            node.children.forEach((child, index) => {
                if (child.type != "mdxTextExpression" || child.value != "ignore") return;
                deleteIndexes.push(index);
            });
            if (deleteIndexes.length > 0) {
                deleteIndexes.reverse().forEach((value) => {
                    node.children.splice(value, 1);
                });
                node.children.forEach((child) => {
                    if (child.type == "text") {
                        child.value = child.value.trim();
                    }
                });
            }
        });
    };
};