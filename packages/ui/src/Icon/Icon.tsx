import ArrowRight from "./ArrowRight";
import Heart from "./Heart";
import Settings from "./Settings";
import World from "./World";

export type IconName = "ArrowRight" | "Heart" | "Settings" | "World";

export interface IconProps {
  iconName: IconName;
  className?: string;
}

const iconMap = new Map([
  ["ArrowRight", ArrowRight],
  ["Heart", Heart],
  ["Settings", Settings],
  ["World", World],
]);

export const Icon = ({ iconName, className }: IconProps) => {
  const IconComponent = iconMap.get(iconName);
  return IconComponent ? <IconComponent className={className} /> : null;
};
