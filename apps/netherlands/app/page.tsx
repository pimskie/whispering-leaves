import { Button } from "@repo/ui/Button";
import { KeyStatistic } from "@repo/ui/KeyStatistic";
import { TopicPill } from "@repo/ui/TopicPill";

export default function Home() {
  return (
    <div>
      <Button appName="Netherlands">Button</Button>

      <KeyStatistic
        statistic={100}
        description="Medewerkers overal ter wereld"
        suffix="+"
      ></KeyStatistic>

      <TopicPill
        title="Met liefde"
        description="We maken apps en websites met passie en liefde"
        iconName="Heart"
      ></TopicPill>
    </div>
  );
}