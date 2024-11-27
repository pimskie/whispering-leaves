import ArrowRight from "./ArrowRight";
import Heart from "./Heart";
import Settings from "./Settings";
import World from "./World";
import External from "./External";

export type IconName =
  | "ArrowRight"
  | "Heart"
  | "Settings"
  | "World"
  | "External";

export interface IconProps {
  iconName: IconName;
  className?: string;
}

const iconMap = new Map([
  ["ArrowRight", ArrowRight],
  ["Heart", Heart],
  ["Settings", Settings],
  ["World", World],
  ["External", External],
]);

export const Icon = ({ iconName, className }: IconProps) => {
  const IconComponent = iconMap.get(iconName);
  return IconComponent ? <IconComponent className={className} /> : null;
};
