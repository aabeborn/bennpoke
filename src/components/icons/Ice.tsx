import * as React from "react";
import clsx from "clsx";

interface Props {
    classes?: string;
    childClasses ?: string;
}

const Type: React.FC<Props> = ({classes, childClasses}) => {
    return (
        <svg className={classes || ""} width="25" height="25" viewBox="0 0 25 25"  xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1278 4.65036L5.91862 1.5752L6.10642 8.4483L11.969 11.3518L12.1278 4.65036Z"  className={childClasses || ""}/>
            <path d="M19.0212 8.532L18.9423 1.60349L12.9036 4.89112L12.9781 11.4329L19.0212 8.532Z"  className={childClasses || ""}/>
            <path d="M19.0177 15.9429L25 12.5211L19.0146 9.37311L13.0319 12.5157L19.0177 15.9429Z"  className={childClasses || ""}/>
            <path d="M11.9681 12.5211L5.98583 15.9429L0 12.5157L5.98272 9.37311L11.9681 12.5211Z"  className={childClasses || ""}/>
            <path d="M19.1113 23.3623L12.9021 20.2871L13.0609 13.5856L18.9235 16.4892L19.1113 23.3623Z"  className={childClasses || ""}/>
            <path d="M6.05412 16.4963L6.13305 23.4248L12.1718 20.1372L12.0973 13.5954L6.05412 16.4963Z"  className={childClasses || ""}/>
        </svg>
    )
}

export default Type