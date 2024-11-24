import { Button } from "@repo/ui/Button";
import { KeyStatistic } from "@repo/ui/KeyStatistic";
import { TopicPill } from "@repo/ui/TopicPill";

export default function Home() {
  return (
    <div>
      <Button appName="Países Bajos">Button</Button>

      <KeyStatistic
        statistic={100}
        description="Empleados en todo el mundo"
        suffix="+"
      ></KeyStatistic>

      <TopicPill
        title="Con amor"
        description="Creamos aplicaciones y sitios web con pasión y amor"
        iconName="Heart"
      ></TopicPill>
    </div>
  );
}
