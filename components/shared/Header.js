import React from "react";
import Link from "next/link";
import "../../styles/main.scss";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p className="customClass">I am a styled para</p>
        <Link href="/">
          <a> Home </a>
        </Link>
        <Link href="/about">
          <a> About </a>
        </Link>
        <Link href="/portfolios">
          <a> Portfolios </a>
        </Link>
        <Link href="/blogs">
          <a> Blog </a>
        </Link>
        <Link href="/cv">
          <a> CV </a>
        </Link>
      </React.Fragment>
    );
  }
}

export default Header;
