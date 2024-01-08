import { ScrollArea } from "~/components/ui/scroll-area";
import { cn } from "~/lib/utils";
import type { Mail } from "../data";

interface Props {
  mails: Mail[];
  selectID: string;
  onClick: (mail: Mail) => void;
}
export default function MailList(props: Readonly<Props>) {
  return (
    <ScrollArea className="h-[60vh] text-primary">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {props.mails.map((x) => (
          <button
            key={x.id}
            onClick={() => props.onClick(x)}
            className={cn(
              x.id === props.selectID && "bg-accent",
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
            )}
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{x.name}</div>
                  {!x.read && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                  )}
                </div>

                <div className="ml-auto text-xs">{x.date}</div>
              </div>
              <div className="text-xs font-medium">{x.subject}</div>
            </div>
            <div className="line-clamp-2 text-xs text-muted-foreground">
              {x.text}
            </div>
            <div className="flex items-center gap-2">
              {x.labels.map((l) => (
                <div
                  key={l}
                  className={cn(
                    l === "work" && "!bg-primary !text-primary-foreground",
                    l === "personal" && "!bg-transparent ",

                    "inline-flex items-center rounded-md bg-secondary border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2  text-primary hover:bg-secondary/80"
                  )}
                >
                  {l}
                </div>
              ))}
            </div>
          </button>
        ))}
      </div>
    </ScrollArea>
  );
}
