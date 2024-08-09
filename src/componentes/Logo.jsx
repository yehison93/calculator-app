import { Image } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const Logo = ({ logo, url }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="logo-image">
        <Image src={logo} width={100} />
      </div>
    </a>
  );
};

export default Logo;
