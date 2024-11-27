import { Icon, type IconName } from "../Icon/Icon";
import { Link } from "../Link/Link";

export interface TopicPillProps {
  title: string;
  description: string;
  iconName: IconName;
  path?: string;
}

export const TopicPill = ({
  title,
  description,
  iconName,
  path = "#",
}: TopicPillProps) => {
  return (
    <Link
      href={path}
      className="pill p-6 text-text rounded-full flex justify-between gap-14 items-center border-2 border-border bg-background hover:bg-brand transition-colors"
    >
      <Icon className="w-14" iconName={iconName} />
      <div className="flex flex-col gap-3">
        {title}
        <div>{description}</div>
      </div>

      <Icon className="w-14" iconName="ArrowRight" />
    </Link>
  );
};
