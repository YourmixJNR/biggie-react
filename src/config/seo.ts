const image = "https://linktoopengraphimaage.cdn";
const creator = "Michael Victor";
const author = creator;

const url = (slug?: string) => {
    return `https://linktowebsite.com/${slug ?? ""}`;
};

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
    // add more pages
};

export default SEO_DATA