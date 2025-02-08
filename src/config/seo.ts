// define the default image URL for Open Graph
const image = "https://linktoopengraphimaage.cdn";

// define the creator and author of the content
const creator = "Michael Victor";
const author = creator;

// function to generate the full URL for a given slug
const url = (slug?: string) => {
  return `https://linktowebsite.com/${slug ?? ""}`;
};

// SEO data configuration for different pages
const SEO_DATA = {
  homePage: {
    author,
    image,
    creator,
    url: url(),
    title: "biggie react | Set up projects faster -  Just clone it",
    description: "Yay",
  },
  aboutUsPage: {
    image,
    author,
    creator,
    url: url("about"),
    title: "About | Mission | Vision | Achievements",
    description: "description to about us page",
  },
  // Add more pages as needed
};

export default SEO_DATA;
