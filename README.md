# Next.js Task

![image](https://github.com/Amir-Adel9/next-js-assignment/assets/107762758/f0b23ca5-8391-4f34-96e3-c67dd716a7ee)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and hosted on [Vercel](https://vercel.com/).

Link to the the website: https://next-js-assignment-eta.vercel.app/ 

## Folder Structure

- ```/src/app/page.tsx``` is the entry point for the app.
- ```/src/app/global.css``` contains the CSS variables for and the default styles for the app.
- ```/src/components/``` contains labeled subfolders for the components of each section of the app.
- ```/src/data/``` contains mocked up data in JSON files to demonstrate the usage of reusable components.
- ```/src/utils/``` contains utilities such as types that are infered from the customer data.
### Adding new entries using to the data:

The website's reusable nature allows for the addition of extra customer testimonials, you can do that by editing the ```/src/data/clients/clients.json``` file and adding new entries to the clients array which must follow the same structure to avoid any type errors.

### Customer Schema:
```js
type Customer = {
    id: number;
    name: string;
    occupation: string;
    photo_url: string;
    review: string;
    rating: number;
}
```


![image](https://github.com/Amir-Adel9/next-js-assignment/assets/107762758/88e6629d-a501-44e3-96c7-306015e072d2)

## Color Palette
- ```primary-background:``` <span style="background:#e8f1f9; color:black"> #e8f1f9 </span>.
- ```primary-foreground:``` <span style="background:#f5f5f5; color:black"> #f5f5f5 </span>.
- ```accent-foreground:``` <span style="background:#ff785a; color:black"> #ff785a </span>.
- ```primary-text:``` <span style="background:#ffffff; color:black"> #ffffff </span>.
- ```secondary-text:``` <span style="background:#1f2b5f; color:white"> #1f2b5f </span>.
- ```accent-text:``` <span style="background:#4d9de0; color:white"> #4d9de0 </span>.
## Fonts Used

- [Poppins](https://fonts.google.com/specimen/Poppins)
- [Lobster](https://fonts.google.com/specimen/Lobster)

## Getting Started

First install the dependencies, then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.



