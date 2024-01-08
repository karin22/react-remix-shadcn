import { type Mail } from "~/components/mail/data";
import { TooltipProvider } from "~/components/ui/tooltip";
import { Button } from "~/components/ui/button";

import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";
import { Separator } from "~/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Switch } from "~/components/ui/switch";
import MenuDisplay from "./menuDisplay";

interface Props {
  mail: Mail;
}
export default function Display(props: Readonly<Props>) {
  return (
    <TooltipProvider>
      <div className="flex h-full flex-col">
        <MenuDisplay />
        <Separator />
        <div className="flex flex-1 flex-col">
          <div className="flex items-start p-4">
            <div className="flex items-start gap-4 text-sm">
              <Avatar>
                <AvatarImage alt={props.mail.name} />
                <AvatarFallback>
                  {props.mail.name.substring(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-semibold">{props.mail.name}</div>
                <div className="line-clamp-1 text-xs">{props.mail.subject}</div>
                <div className="line-clamp-1 text-xs">
                  <span className="font-medium">Reply-To:</span>{" "}
                  {props.mail.email}
                </div>
              </div>
            </div>

            <div className="ml-auto text-xs text-muted-foreground">
              {props.mail.date}
            </div>
          </div>
          <Separator />
          <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
            {props.mail.text}
          </div>
          <Separator className="mt-auto" />
          <div className="p-4">
            <form>
              <div className="grid gap-4">
                <Textarea
                  className="p-4"
                  placeholder={`Reply ${props.mail.name}...`}
                />
                <div className="flex items-center">
                  <Label
                    htmlFor="mute"
                    className="flex items-center gap-2 text-xs font-normal"
                  >
                    <Switch id="mute" aria-label="Mute thread" /> Mute this
                    thread
                  </Label>
                  <Button
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                    className="ml-auto"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
