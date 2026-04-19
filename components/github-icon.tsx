import type { SVGProps } from "react";
import { siGithub } from "simple-icons";

type GitHubIconProps = SVGProps<SVGSVGElement>;

export function GitHubIcon(props: GitHubIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d={siGithub.path} />
    </svg>
  );
}
