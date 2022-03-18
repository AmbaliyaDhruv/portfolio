import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./NavSocial.module.css";

const NavSocial = ({ socialClass, socialIcons }) => {
    return (
        <>
            <li className={`${styles[socialClass]}`}>
                <a
                    href="https://github.com/AmbaliyaDhruv"
                    className="socialIcons"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="My Github Portfolio."
                >
                    <FontAwesomeIcon
                        icon={["fab", "github"]}
                        className={`${styles[socialIcons]}`}
                    />
                </a>
            </li>
            <li className={`${styles[socialClass]}`}>
                <a
                    href="https://www.linkedin.com/in/dhruv-ambaliya-fullstackwebdeveloper/"
                    className="socialIcons"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="My Linkedin Profile."
                >
                    <FontAwesomeIcon
                        icon={["fab", "linkedin"]}
                       className={`${styles[socialIcons]}`}
                    />
                </a>
            </li>
            <li className={`${styles[socialClass]}`}>
                <a
                    href="mailto:ambaliyadhruv1112@gmail.com"
                    className="socialIcons"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="My Linkedin email."
                >
                    <FontAwesomeIcon icon="envelope"  className={`${styles[socialIcons]}`} />
                </a>
            </li>
            <li className={`${styles[socialClass]}`}>
                <a
                    href="tel:+918264854885"
                    className="socialIcons"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="My Linkedin contact"
                >
                    <FontAwesomeIcon icon="phone"  className={`${styles[socialIcons]}`} />
                </a>
            </li>
            <li className={`${styles[socialClass]}`}>
                <a
                    href="https://drive.google.com/file/d/1g20D1sblle14ngNcesAZdxeyTvOhlK7t/view?usp=sharing"
                    className="socialIcons"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="My Linkedin resume"
                >
                    <FontAwesomeIcon icon="file"  className={`${styles[socialIcons]}`} />
                </a>
            </li>
        </>
    );
};

export default NavSocial;
