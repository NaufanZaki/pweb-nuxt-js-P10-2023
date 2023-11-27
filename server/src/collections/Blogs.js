/** @type {import('payload/types').CollectionConfig} */
const Blog = {
    slug: "Blog",
    access: {
      read: () => true,
      update: () => true,
      delete: () => true,
      create: () => true,
    },
    fields: [
      {
        name: "Title",
        type: "text",
        required: true,
      },
      {
        name: "Recipe",
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
  