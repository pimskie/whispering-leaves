import { Button } from "@repo/ui/Button";
import { BrandCard } from "@repo/ui/BrandCard";
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button appName="Foo">Foo Button</Button>
      <BrandCard
        name="Mentos"
        color="blue"
        description="The fresh bite"
        url="https://metos.com"
      ></BrandCard>
    </div>
  );
}
