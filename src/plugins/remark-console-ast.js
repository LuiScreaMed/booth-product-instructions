import { visit } from "unist-util-visit";

export default function () {
    return async (ast) => {
        let flag = false;
        visit(ast, 'heading', (node) => {
            if (node.depth === 1) {
                if (node.children[0].value === "Rotating Beacon v1.0 Instructions ") {
                    flag = true;
                    return false;
                }
            }
        });
        if (!flag) return;
        visit(ast, 'containerDirective', (node) => {
            console.log(JSON.stringify(node, undefined, 2))
        });
    };
};