import { Button } from "@repo/ui/Button";
import { KeyStatistic } from "@repo/ui/KeyStatistic";
import { TopicPill } from "@repo/ui/TopicPill";

export default function Home() {
  return (
    <div>
      <Button appName="Netherlands">Button</Button>

      <KeyStatistic
        statistic={100}
        description="Employees around the world"
        suffix="+"
      ></KeyStatistic>

      <TopicPill
        title="With love"
        description="We create apps and sites with passion"
        iconName="Heart"
      ></TopicPill>
    </div>
  );
}
