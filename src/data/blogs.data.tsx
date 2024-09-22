import { cache } from 'react';

export const revalidate = 3600;

export const getBlogs = cache(async () => {
  const blogs = [
    {
      id: 1,
      title: 'The Rise and Rise of JavaScript',
      link: 'https://www.linkedin.com/pulse/rise-javascript-vaibhav-matere/'
    },
    {
      id: 2,
      title: 'Why we import CSS & JavaScript files in HTML like this ?',
      link: 'https://www.linkedin.com/pulse/why-we-import-css-javascript-files-html-like-vaibhav-matere-/?trackingId=V3Whs9EAQXCzJPk9NAcIfg%3D%3D'
    },
    {
      id: 3,
      title: 'Power of connections and networking in uur career',
      link: 'https://www.linkedin.com/pulse/power-connections-networking-vaibhav-matere/'
    },
    {
      id: 4,
      title: 'What is Hactoberfest and Why should we care about it?',
      link: 'https://www.linkedin.com/pulse/what-hactoberfest-why-should-you-care-vaibhav-matere/'
    }
  ];
  return blogs;
});
