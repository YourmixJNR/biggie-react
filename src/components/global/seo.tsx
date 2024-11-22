import { Helmet } from "react-helmet-async";
import { SEO_DATA } from "../../config";

interface SeoProps {
  title: string;
  description?: string;
  author?: string;
  image?: string;
  url?: string;
  children?: React.ReactNode;
  creator?: string;
}

export default function SEO({
  title,
  description,
  author,
  image,
  url,
  children,
  creator,
}: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta data-react-helmet="true" name="description" content={description} />
      <meta data-react-helmet="true" name="image" content={image} />
      <meta data-react-helmet="true" name="og:title" content={title} />
      <meta
        data-react-helmet="true"
        name="og:description"
        content={description}
      />
      <meta data-react-helmet="true" itemProp="name" content={title} />
      <meta
        data-react-helmet="true"
        itemProp="description"
        content={description}
      />
      <meta data-react-helmet="true" itemProp="image" content={image} />
      <meta data-react-helmet="true" name="og:image" content={image} />
      <meta data-react-helmet="true" name="og:type" content="website" />
      <meta
        data-react-helmet="true"
        name="og:site_name"
        content={SEO_DATA.homePage.title}
      />
      <meta data-react-helmet="true" name="og:url" content={url} />
      <meta
        data-react-helmet="true"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta data-react-helmet="true" name="twitter:image:src" content={image} />
      <meta data-react-helmet="true" name="twitter:creator" content={creator} />
      <meta data-react-helmet="true" name="twitter:title" content={title} />
      <meta
        data-react-helmet="true"
        name="twitter:description"
        content={description}
      />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />
      {children}
    </Helmet>
  );
}
