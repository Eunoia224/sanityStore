export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      }
    },
    { 
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    { 
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
    { 
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    { 
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    // to implement on-sale
    {
      name: "sale",
      title: "Sale",
      type: "boolean",
    },
    {
      name: "salePrice",
      title: "SalePrice",
      type: "number",
    },
  ]
}

// export default {
//   name: "product",
//   title: "Product",
//   type: "document",
//   fields: [
//     {
//       name: "image",
//       title: "Image",
//       type: "array",
//       of: [{ type: "image" }],
//       options: {
//         hotspot: true,
//       },
//     },
//     {
//       name: "name",
//       title: "Name",
//       type: "string",
//     },
//     {
//       name: "slug",
//       title: "Slug",
//       type: "slug",
//       options: {
//         source: "name",
//         maxLength: 90,
//       },
//     },
//     {
//       name: "price",
//       title: "Price",
//       type: "number",
//     },
//     {
//       name: "details",
//       title: "Details",
//       type: "string",
//     },
//   ],
// };