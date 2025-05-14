import React from "react";
import { Typography } from "antd";
import "../../styles/Footer.css";

const { Text } = Typography;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Text className="copyright-text">
          All rights reserved © {new Date().getFullYear()} uddhavDhakal
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
