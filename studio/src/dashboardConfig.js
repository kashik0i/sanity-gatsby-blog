export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "614a08cea99069008c31a304",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-qfevzzhd",
                  apiId: "6d970b12-8c75-45d9-9280-756f25b326be",
                },
                {
                  buildHookId: "614a08ce80ae5700e33955b8",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-pq462kv7",
                  apiId: "56eb102a-ef43-45ad-80e1-3cd27936177f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/kashik0i/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-pq462kv7.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
