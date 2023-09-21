import { Helmet } from "react-helmet";

const HelmetCustom = ({
  title = "Not Youtube",
  description = "project made with react js + youtube API + firebase",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default HelmetCustom;
