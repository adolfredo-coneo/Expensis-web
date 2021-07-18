import classes from "./Footer.module.css"

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className={classes.footer}>
      <p className="">
        ©Copyright 2021 by{" "}
        <a
          href="https://adolconeo.com/"
          target="_blank"
          rel="noreferrer"
          className="font-black"
        >
          <span className="text-yellow-400">&#123; </span>adolConeo
          <span className="text-yellow-400"> &#125;</span>
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;