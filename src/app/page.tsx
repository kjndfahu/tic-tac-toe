import { Button } from "@/shared/ui/button";
import {prisma} from "@/shared/lib/db";

export default async function Home() {
  const games = await prisma.game.findMany();
  return (
    <div className="">
      <Button>Hello </Button>
    </div>
  );
}
