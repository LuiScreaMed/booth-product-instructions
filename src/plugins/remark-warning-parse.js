import { visit } from "unist-util-visit";

export default function () {
    return (ast) => {
        visit(ast, 'blockquote', (node, index, parent) => {
            const firstChild = node.children[0];
            let hasWarningIcon = false;
            let warningText = undefined;
            if (firstChild && firstChild.type === 'paragraph') {
                for (let paragraphChild of firstChild.children) {
                    if (paragraphChild.type === 'text' && (paragraphChild.value.includes(':warning:') || paragraphChild.value.includes('⚠️'))) {
                        hasWarningIcon = true;
                    }
                    if (paragraphChild.type === 'strong') {
                        let textNode = paragraphChild.children[0];
                        if (textNode && textNode.type === 'text') {
                            warningText = textNode.value;
                        }
                    }
                    if (hasWarningIcon && warningText !== undefined) break;
                }

                if (!(hasWarningIcon && warningText !== undefined)) return;

                const content = node.children.slice(1);

                const admonitionNode = {
                    type: "containerDirective",
                    name: "warning",
                    attributes: {},
                    children: [
                        {
                            type: "paragraph",
                            data: {
                                directiveLabel: true
                            },
                            children: [
                                {
                                    type: "text",
                                    value: warningText
                                }
                            ]
                        },
                        ...content
                    ]
                }

                parent.children.splice(index, 1, admonitionNode);
                return index;
            }
        });
    };
};