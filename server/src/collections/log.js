/** @type {import('payload/types').CollectionConfig} */
// collection log.js
const log = {
    slug: "log",
    access: {
      read: () => true,
      create: () => true,
    },
    fields: [
      {
        name: "collectionName",
        type: "text",
        required: true,
      },
      {
        name: "action",
        type: "text",
        required: true,
      },
      {
        name: "timestamp",
        type: "date",
        required: true,
      },
    ],
  };
  
  export default log;