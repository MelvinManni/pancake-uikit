import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 12 7" {...props}>
      <path d="M11.0215 0.812462C10.844 0.634951 10.5662 0.618814 10.3705 0.76405L10.3144 0.812462L6.0013 5.12535L1.68819 0.812462C1.51068 0.634951 1.2329 0.618814 1.03716 0.76405L0.981081 0.812462C0.80357 0.989973 0.787433 1.26775 0.932669 1.46349L0.981081 1.51957L5.64775 6.18623C5.82526 6.36375 6.10303 6.37988 6.29878 6.23465L6.35486 6.18623L11.0215 1.51957C11.2168 1.32431 11.2168 1.00772 11.0215 0.812462Z" fill="black" />
    </Svg>
  );
};

export default Icon;