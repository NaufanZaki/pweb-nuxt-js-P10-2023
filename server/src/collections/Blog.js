import payload from 'payload';
/** @type {import('payload/types').CollectionConfig} */
// collection Blog.js
const Blog = {
    slug: "Blog",
    access: {
      read: () => true,
      update: () => true,
      delete: () => true,
      create: () => true,
    },
    hooks: {
      afterOperation: [
          async (args) => {
              if (args.operation == "create") {
                  payload.create({
                      collection: "log",
                      data: {
                          collectionName: "Blog",
                          action : "create",
                          timestamp: new Date()
                      },
                  });
              } else if (args.operation == "update") {
                  payload.create({
                      collection: "log",
                      data: {
                          collectionName: "Blog",
                          action : "update",
                          timestamp: new Date()
                      },
                  });
              } else if (args.operation == "delete") {
                  payload.create({
                      collection: "log",
                      data: {
                          collectionName: "Blog",
                          action : "delete",
                          timestamp: new Date()
                      },
                  });
              }
          },
      ],
  },
    fields: [
      {
        name: "Title",
        type: "text",
        required: true,
      },
      {
        name: "Ingredients",
        type: "text",
        required: true,
      },
      {
        name: "Tutorial",
        type: "text",
        required: true,
      },
      {
        name: "Image",
        type: "text",
        required: true,
      },
    ],
  };
  
  export default Blog;
  