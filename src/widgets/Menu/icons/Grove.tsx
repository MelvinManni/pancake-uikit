import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 14 16" {...props}>
            <path d="M6.72851 3.96986L6.76351 3.97315L6.76239 4.02162L7.0218 3.99739L7.26324 4.02006L7.26424 3.97475L7.32174 3.96938C7.48651 3.954 7.64372 3.9443 7.7945 3.9443C10.7305 3.9443 13 6.17338 13 9.00005C13 11.9423 10.5255 14.5 7.772 14.5C7.5403 14.5 7.30334 14.4837 7.06772 14.4512L6.9994 14.4418L6.93108 14.4513C6.69637 14.4837 6.45973 14.5 6.2275 14.5C3.47428 14.5 1 11.9423 1 9.00005C1 6.23244 3.33309 3.95037 6.23841 3.94431C4.99117 3.94699 3.78067 4.3822 2.8281 5.17312L2.82803 5.17317C2.50985 5.43745 2.46502 5.9101 2.73012 6.22927L2.73037 6.22957C2.87875 6.40793 3.09315 6.50005 3.30725 6.50005C3.47655 6.50005 3.64617 6.44273 3.78485 6.32852L3.78486 6.32852L3.78642 6.32722C4.47078 5.75894 5.34568 5.4443 6.25 5.4443C6.66414 5.4443 7 5.10844 7 4.6943C7 4.28016 6.66414 3.9443 6.25 3.9443C6.40284 3.9443 6.56193 3.95422 6.72851 3.96986ZM8.30022 0.494902C8.30215 0.494373 8.30316 0.49416 8.30318 0.494186C8.3032 0.494212 8.30223 0.494476 8.30022 0.494902Z" stroke="#262533" />
        </Svg>
    );
};

export default Icon;
