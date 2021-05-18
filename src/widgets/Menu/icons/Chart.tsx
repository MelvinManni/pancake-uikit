import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 15 15" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.76532 2.96929C6.05398 3.19595 6.21998 3.53395 6.21998 3.89662C6.21998 6.81995 6.31865 7.60662 6.72198 7.90595C6.98665 8.10129 7.34932 8.09929 8.57132 8.06529C9.13932 8.04862 9.86665 8.02729 10.8193 8.02729C11.1993 8.02729 11.5573 8.18995 11.8 8.47329C12.0253 8.73662 12.124 9.08062 12.072 9.41929C11.6267 12.3026 9.17332 14.3966 6.23865 14.3966C2.98265 14.3966 0.333984 11.748 0.333984 8.49262C0.333984 5.91129 2.28598 3.32995 4.68532 2.73929C5.05998 2.64795 5.46265 2.73329 5.76532 2.96929ZM4.98865 3.70262C4.96732 3.70262 4.94598 3.70529 4.92465 3.71062C2.94465 4.19795 1.33398 6.34329 1.33398 8.49262C1.33398 11.1966 3.53398 13.3966 6.23865 13.3966C8.67665 13.3966 10.714 11.66 11.0833 9.26662C11.086 9.24662 11.0953 9.18862 11.0407 9.12395C10.9887 9.06329 10.906 9.02729 10.8193 9.02729C9.87865 9.02729 9.16065 9.04862 8.59998 9.06462C7.24265 9.10529 6.68132 9.12062 6.12665 8.70929C5.33352 8.12171 5.22924 7.13391 5.22063 4.36198L5.21998 3.89662C5.21998 3.84062 5.19598 3.79395 5.14798 3.75662C5.10332 3.72129 5.04665 3.70262 4.98865 3.70262ZM12.3676 1.98949C13.5396 3.16082 14.2836 4.70015 14.2622 5.91149C14.2542 6.38415 13.9109 6.77882 13.4469 6.84882C12.5416 6.98549 11.4816 7.02682 10.5436 7.02682C9.67025 7.02682 8.90158 6.99149 8.45958 6.96615C7.90358 6.93349 7.46092 6.49015 7.42892 5.93415C7.37692 5.05282 7.26425 2.81349 7.34425 1.08149C7.36625 0.578153 7.77292 0.177487 8.27025 0.16882C9.69492 0.127487 11.1649 0.78882 12.3676 1.98949ZM8.35558 1.16815H8.34092C8.26758 2.84749 8.37625 5.01682 8.42692 5.87615C8.42958 5.92749 8.46692 5.96482 8.51758 5.96749C9.20292 6.00682 11.5642 6.11615 13.2623 5.86615C13.2662 4.93015 12.6256 3.66082 11.6609 2.69682C10.6716 1.70882 9.50092 1.16815 8.35558 1.16815Z" fill="#262533" />
        </Svg>
    );
};

export default Icon;
