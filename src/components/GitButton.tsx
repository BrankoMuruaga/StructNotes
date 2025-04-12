import { URL_GITHUB } from "@src/constants";
import Github from "@src/icons/Github";

function GitButton() {
  return (
    <a
      href={URL_GITHUB}
      target="_blank"
      className="absolute bottom-0 right-0 m-5 flex items-center justify-center size-7 p-1 rounded-full bg-secondary-light dark:bg-tertiary-dark hover:bg-tertiary-light dark:hover:bg-quaternary-dark"
    >
      <Github />
    </a>
  );
}

export default GitButton;
