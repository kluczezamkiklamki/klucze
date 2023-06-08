const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const queryCards = await graphql(`
        {
            allDatoCmsKey {
                nodes {
                    slug
                }
            }
        }
    `);

    const keyTemplate = path.resolve(`./src/templates/keyTemplate.js`);

    queryCards.data.allDatoCmsKey.nodes.forEach((node) => {
        const { slug } = node;
        createPage({
            path: slug,
            component: keyTemplate,
            context: {
                slug,
            },
        });
    });
};