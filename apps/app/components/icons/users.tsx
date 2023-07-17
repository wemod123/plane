import React from "react";

import type { Props } from "./types";

export const UsersIcon: React.FC<Props> = ({
  width = "24",
  height = "24",
  color = "rgb(var(--color-text-200))",
  className,
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color}
      d="M12.754 7C13.72 7 14.504 7.784 14.504 8.75V13.499C14.504 14.6927 14.0298 15.8376 13.1857 16.6817C12.3416 17.5258 11.1967 18 10.003 18C8.80926 18 7.66441 17.5258 6.82031 16.6817C5.97621 15.8376 5.502 14.6927 5.502 13.499V8.75C5.502 7.784 6.285 7 7.252 7H12.754ZM12.754 8.5H7.252C7.1857 8.5 7.12211 8.52634 7.07522 8.57322C7.02834 8.62011 7.002 8.6837 7.002 8.75V13.499C7.002 14.2949 7.31818 15.0582 7.88097 15.621C8.44377 16.1838 9.20709 16.5 10.003 16.5C10.7989 16.5 11.5622 16.1838 12.125 15.621C12.6878 15.0582 13.004 14.2949 13.004 13.499V8.75C13.004 8.6837 12.9777 8.62011 12.9308 8.57322C12.8839 8.52634 12.8203 8.5 12.754 8.5ZM1.75 7H5.131C4.7782 7.42609 4.56274 7.94905 4.513 8.5H1.75C1.6837 8.5 1.62011 8.52634 1.57322 8.57322C1.52634 8.62011 1.5 8.6837 1.5 8.75V11.999C1.49994 12.3769 1.5855 12.7499 1.75027 13.0899C1.91504 13.43 2.15473 13.7283 2.45133 13.9625C2.74793 14.1966 3.09374 14.3605 3.46277 14.4418C3.83179 14.5231 4.21445 14.5198 4.582 14.432C4.667 14.936 4.822 15.417 5.035 15.864C4.44228 16.0226 3.82103 16.0427 3.21929 15.9228C2.61756 15.8029 2.05145 15.5463 1.56475 15.1727C1.07805 14.7991 0.683789 14.3185 0.412463 13.7682C0.141138 13.2179 1.22998e-05 12.6126 0 11.999V8.75C0 7.784 0.784 7 1.75 7ZM14.875 7H18.25C19.216 7 20 7.784 20 8.75V12C20.0001 12.6132 19.8593 13.2182 19.5884 13.7682C19.3175 14.3183 18.9237 14.7987 18.4376 15.1724C17.9514 15.546 17.3858 15.8029 16.7846 15.9232C16.1833 16.0435 15.5625 16.0239 14.97 15.866C15.184 15.418 15.339 14.937 15.425 14.433C15.7921 14.5198 16.174 14.5223 16.5423 14.4405C16.9105 14.3587 17.2554 14.1946 17.5512 13.9606C17.847 13.7265 18.086 13.4286 18.2503 13.089C18.4147 12.7495 18.5 12.3772 18.5 12V8.75C18.5 8.6837 18.4737 8.62011 18.4268 8.57322C18.3799 8.52634 18.3163 8.5 18.25 8.5H15.493C15.4433 7.94905 15.2278 7.42609 14.875 7ZM10 0C10.7956 0 11.5587 0.316071 12.1213 0.87868C12.6839 1.44129 13 2.20435 13 3C13 3.79565 12.6839 4.55871 12.1213 5.12132C11.5587 5.68393 10.7956 6 10 6C9.20435 6 8.44129 5.68393 7.87868 5.12132C7.31607 4.55871 7 3.79565 7 3C7 2.20435 7.31607 1.44129 7.87868 0.87868C8.44129 0.316071 9.20435 0 10 0ZM16.5 1C17.163 1 17.7989 1.26339 18.2678 1.73223C18.7366 2.20107 19 2.83696 19 3.5C19 4.16304 18.7366 4.79893 18.2678 5.26777C17.7989 5.73661 17.163 6 16.5 6C15.837 6 15.2011 5.73661 14.7322 5.26777C14.2634 4.79893 14 4.16304 14 3.5C14 2.83696 14.2634 2.20107 14.7322 1.73223C15.2011 1.26339 15.837 1 16.5 1ZM3.5 1C4.16304 1 4.79893 1.26339 5.26777 1.73223C5.73661 2.20107 6 2.83696 6 3.5C6 4.16304 5.73661 4.79893 5.26777 5.26777C4.79893 5.73661 4.16304 6 3.5 6C2.83696 6 2.20107 5.73661 1.73223 5.26777C1.26339 4.79893 1 4.16304 1 3.5C1 2.83696 1.26339 2.20107 1.73223 1.73223C2.20107 1.26339 2.83696 1 3.5 1ZM10 1.5C9.60218 1.5 9.22064 1.65804 8.93934 1.93934C8.65804 2.22064 8.5 2.60218 8.5 3C8.5 3.39782 8.65804 3.77936 8.93934 4.06066C9.22064 4.34196 9.60218 4.5 10 4.5C10.3978 4.5 10.7794 4.34196 11.0607 4.06066C11.342 3.77936 11.5 3.39782 11.5 3C11.5 2.60218 11.342 2.22064 11.0607 1.93934C10.7794 1.65804 10.3978 1.5 10 1.5ZM16.5 2.5C16.2348 2.5 15.9804 2.60536 15.7929 2.79289C15.6054 2.98043 15.5 3.23478 15.5 3.5C15.5 3.76522 15.6054 4.01957 15.7929 4.20711C15.9804 4.39464 16.2348 4.5 16.5 4.5C16.7652 4.5 17.0196 4.39464 17.2071 4.20711C17.3946 4.01957 17.5 3.76522 17.5 3.5C17.5 3.23478 17.3946 2.98043 17.2071 2.79289C17.0196 2.60536 16.7652 2.5 16.5 2.5ZM3.5 2.5C3.23478 2.5 2.98043 2.60536 2.79289 2.79289C2.60536 2.98043 2.5 3.23478 2.5 3.5C2.5 3.76522 2.60536 4.01957 2.79289 4.20711C2.98043 4.39464 3.23478 4.5 3.5 4.5C3.76522 4.5 4.01957 4.39464 4.20711 4.20711C4.39464 4.01957 4.5 3.76522 4.5 3.5C4.5 3.23478 4.39464 2.98043 4.20711 2.79289C4.01957 2.60536 3.76522 2.5 3.5 2.5Z"
    />
  </svg>
);
