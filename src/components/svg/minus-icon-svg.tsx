import { ISvg } from "../../types/svg";

const MinusIconSvg = ({ className }: ISvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="24"
      // height="25"
      className={className}
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M3 12.125C3 11.8266 3.11853 11.5405 3.3295 11.3295C3.54048 11.1185 3.82663 11 4.125 11H19.125C19.4234 11 19.7095 11.1185 19.9205 11.3295C20.1315 11.5405 20.25 11.8266 20.25 12.125C20.25 12.4234 20.1315 12.7095 19.9205 12.9205C19.7095 13.1315 19.4234 13.25 19.125 13.25H4.125C3.82663 13.25 3.54048 13.1315 3.3295 12.9205C3.11853 12.7095 3 12.4234 3 12.125Z"
        fill="black "
      />
    </svg>
  );
};

export default MinusIconSvg;
