## Setup Everything

- First create a `nextjs` app.

```
npx create-next-app
```

- It will ask for a name of a project give it appropriate name.
- Inside the `package.json` file.

```
"@babel/core": "^7.17.9",
    "@sanity/client": "^3.2.0",
    "@sanity/image-url": "^1.0.1",
    "@stripe/stripe-js": "^1.25.0",
    "canvas-confetti": "^1.5.1",
    "react-hot-toast": "^2.2.0",
    "react-icons": "^4.3.1",
    "next-sanity-image": "^3.2.1",
    "stripe": "^8.209.0",
```

- Install those packages with the next command.

```
npm install --legacy-peer-deps
```

## Install Sanity

```
IMAGE TEMPLATE
![Albuquerque, New Mexico](/assets/images/albuquerque.jpg)
*A single track trail outside of Albuquerque, New Mexico.*
```

- Install Sanity, you can install it in your `nextjs` app folder or create a parent folder that contains both your next app and your sanity schemas.

```
npm install -g @sanity/cli
```

- _**Optionally**_ This is a coupon (if it works it will double the offers)

```
// On the command line
sanity init --coupon javascriptmastery2022
```

- Login in with your preferred method.
- Give it a project name.
- If you are presented with anything that requires you to confirm, type `y` and continue.
- Select an empty project
- You can run the following on the command line

```
sanity docs
// or
sanity manage
```

to see details about your app or to get to the docs.

- `cd` in to the folder that is created by your sanity (likely to have the name you provide when creating the project) and run the following to get to sanity `Content Studio` (This might ask you to login).
  `sanity start`
  You should be met with a page with `no schema` or `Empty schema`.
- Now on the same folder you should find a folder called `schemas`, It should only have a `schema.js` file.
- In that folder create `banner.js` and `product.js`.
- In the newly created files, create schemas that describe the things we are going to add in the future.
- `name` Name of that schema (or in some context name of a field).
- `title` Title of that field when rendered .
- `type` The type data that field is going to carry.
- `fields` The fields that schema is going to contain.

+++ `banner.js`

```
export default {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "buttonText",
      title: "ButtonText",
      type: "string",
    },
    {
      name: "product",
      title: "Product",
      type: "string",
    },
    {
      name: "desc",
      title: "Desc",
      type: "string",
    },
    {
      name: "smallText",
      title: "SmallText",
      type: "string",
    },
    {
      name: "midText",
      title: "MidText",
      type: "string",
    },
    {
      name: "largeText1",
      title: "LargeText1",
      type: "string",
    },
    {
      name: "largeText2",
      title: "LargeText2",
      type: "string",
    },
    {
      name: "discount",
      title: "Discount",
      type: "string",
    },
    {
      name: "saleTime",
      title: "SaleTime",
      type: "string",
    },
  ],
};
```

+++ `product.js`

```
export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
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
  ],
};
```

+++

- Now inside `schema.js`, import both of the schemas we created.

```
import banner from "./banner";
import product from "./product";
```

- And use them.

```
types: schemaTypes.concat([product, banner]),
```

![Sanity Manage](/static/0_sanity_first_page_after_creating_schemas.png)
![Adding Items](/static/1_sanity_adding_items.png)

- Click on the red arrow to create new items.
- Click on the green arrow to add more images,
- Fill other fields with necessary data.
- And when you are done click `Publish` marked with yellow arrow.

That's it, we are done with our schemas.
