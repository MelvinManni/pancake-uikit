import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 15 15" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.9567 0.166992C13.3747 0.166992 14.9993 1.86433 14.9993 4.39033V10.277C14.9993 12.803 13.3747 14.5003 10.9567 14.5003H4.70868C2.29068 14.5003 0.666016 12.803 0.666016 10.277V4.39033C0.666016 1.86433 2.29068 0.166992 4.70868 0.166992H10.9567ZM10.9567 1.16699H4.70868C2.86068 1.16699 1.66602 2.43166 1.66602 4.39033V10.277C1.66602 12.2357 2.86068 13.5003 4.70868 13.5003H10.9567C12.8053 13.5003 13.9993 12.2357 13.9993 10.277V4.39033C13.9993 2.43166 12.8053 1.16699 10.9567 1.16699ZM7.83268 4.38519C8.10868 4.38519 8.33268 4.60919 8.33268 4.88519V6.82699L10.277 6.82713C10.553 6.82713 10.777 7.05113 10.777 7.32713C10.777 7.60313 10.553 7.82713 10.277 7.82713L8.33268 7.82699V9.76986C8.33268 10.0459 8.10868 10.2699 7.83268 10.2699C7.55668 10.2699 7.33268 10.0459 7.33268 9.76986V7.82699L5.38835 7.82713C5.11168 7.82713 4.88835 7.60313 4.88835 7.32713C4.88835 7.05113 5.11168 6.82713 5.38835 6.82713L7.33268 6.82699V4.88519C7.33268 4.60919 7.55668 4.38519 7.83268 4.38519Z"  />
    </Svg>
  );
};

export default Icon;
