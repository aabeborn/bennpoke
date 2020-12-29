import * as React from "react";
import clsx from "clsx";

interface Props {
    classes?: string;
    childClasses ?: string;
}

const Type: React.FC<Props> = ({classes, childClasses}) => {
    return (
        <svg className={classes || ""} width="25" height="25" viewBox="0 0 25 25"  xmlns="http://www.w3.org/2000/svg">
            <path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M5.50607 21.492C5.49929 21.492 5.49455 21.4853 5.4968 21.4789L11.8794 3.44404C11.8808 3.44012 11.8845 3.4375 11.8887 3.4375H18.7023C18.7064 3.4375 18.7102 3.44014 18.7115 3.44409L24.9995 21.4789C25.0017 21.4853 24.9969 21.492 24.9902 21.492H5.69787H5.50607ZM0.00982943 21.5625C0.00297424 21.5625 -0.00177174 21.5557 0.000632849 21.5493L4.75356 8.86018C4.755 8.85632 4.75866 8.85378 4.76276 8.85378H8.89251C8.89935 8.85378 8.90409 8.86057 8.90174 8.86696L4.30579 21.5561C4.30439 21.5599 4.30069 21.5625 4.29656 21.5625H0.00982943Z"                
                className={childClasses || ""}
            />
        </svg>
    )
}

export default Type