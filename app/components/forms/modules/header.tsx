import { Separator } from "~/components/ui/separator";

interface Props {
  title: string;
  description: string;
}
export default function FormsHeader({ title, description }: Props) {
  return (
    <div>
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <Separator className="mt-6 mb-8" />
    </div>
  );
}
