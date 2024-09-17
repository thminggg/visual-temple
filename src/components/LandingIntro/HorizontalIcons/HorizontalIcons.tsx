import {
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  SiAmazondynamodb,
  SiApachekafka,
  SiDatabricks,
  SiDocker,
  SiKubernetes,
  SiMicrosoftazure,
  SiTailwindcss,
} from "react-icons/si";
import styles from "./HorizontalIcons.module.scss";

const HorizontalIcons = ({ className }: { className?: string }) => (
  <div className={`flex flex-col gap-12 ${className}`}>
    {/* First Row */}
    <div className={`${styles.svg} ${styles.scrollContent}`}>
      <SiMicrosoftazure style={{ color: "#428bd1" }} />
      <SiAmazondynamodb style={{ color: "#4f5ed5" }} />
      <BiLogoPostgresql style={{ color: "#2f648a" }} />
      <SiApachekafka />
      <SiDatabricks style={{ color: "#fc3e36" }} />
      <SiDocker style={{ color: "#0867ce" }} />
      {/* Duplicate for infinite scroll */}
      <SiMicrosoftazure style={{ color: "#428bd1" }} />
      <SiAmazondynamodb style={{ color: "#4f5ed5" }} />
      <BiLogoPostgresql style={{ color: "#2f648a" }} />
      <SiApachekafka />
      <SiDatabricks style={{ color: "#fc3e36" }} />
      <SiDocker style={{ color: "#0867ce" }} />
    </div>
    {/* Second Row */}
    <div className={`justify-end ${styles.svg} ${styles.scrollContentReverse}`}>
      <BiLogoTypescript style={{ color: "#4272ba" }} />
      <BiLogoJavascript style={{ color: "#ebd94d" }} />
      <BiLogoReact style={{ color: "#6eb1cb" }} />
      <SiTailwindcss style={{ color: "#00b4f3" }} />
      <BiLogoNodejs style={{ color: "#5cb36b" }} />
      <SiKubernetes style={{ color: "#4f5ed5" }} />
      {/* Duplicate for infinite scroll */}
      <BiLogoTypescript style={{ color: "#4272ba" }} />
      <BiLogoJavascript style={{ color: "#ebd94d" }} />
      <BiLogoReact style={{ color: "#6eb1cb" }} />
      <SiTailwindcss style={{ color: "#00b4f3" }} />
      <BiLogoNodejs style={{ color: "#5cb36b" }} />
      <SiKubernetes style={{ color: "#4f5ed5" }} />
    </div>
  </div>
);

export default HorizontalIcons;
