import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";
import { cn } from "~/lib/utils";
import { Separator } from "~/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import MailList from "~/components/mail/modules/mailList";
import { Input } from "~/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { TooltipProvider } from "~/components/ui/tooltip";
import { useState } from "react";

import SelectAccount from "~/components/mail/modules/selectAccount";
import MenuSidebar from "~/components/mail/modules/menuSidebar";
import Display from "~/components/mail/modules/display";

import {
  menuSideBar,
  menuSideBar1,
  mails,
  type Mail,
} from "~/components/mail/data";

export default function Mail() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mail, setMail] = useState<Mail>(mails[0]);

  return (
    <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-xl text-primary">
      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction="horizontal"
          className="items-stretch text-primary"
        >
          <ResizablePanel
            defaultSize={270}
            collapsible={true}
            collapsedSize={4}
            minSize={15}
            maxSize={20}
            onCollapse={() => setIsCollapsed(true)}
            onExpand={() => setIsCollapsed(false)}
            className={cn(
              "min-w-[50px] transition-all duration-300 ease-in-out"
            )}
          >
            <div className="flex h-[52px] items-center justify-center px-2">
              <SelectAccount isCollapsed={isCollapsed} />
            </div>
            <Separator />
            <MenuSidebar isCollapsed={isCollapsed} menu={menuSideBar} />
            <Separator />
            <MenuSidebar isCollapsed={isCollapsed} menu={menuSideBar1} />
          </ResizablePanel>

          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={440} minSize={30}>
            <Tabs defaultValue="all">
              <div className="flex items-center px-4 py-2">
                <h1 className="text-xl font-bold">Inbox</h1>
                <TabsList className="ml-auto">
                  <TabsTrigger value="all">All mail</TabsTrigger>
                  <TabsTrigger value="unread">Unread</TabsTrigger>
                </TabsList>
              </div>
              <Separator />
              <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <form>
                  <div className="relative">
                    <MagnifyingGlassIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search" className="pl-8" />
                  </div>
                </form>
              </div>
              <TabsContent value="all" className="m-0">
                <h1>
                  <MailList
                    mails={mails}
                    onClick={(mail) => setMail(mail)}
                    selectID={mail.id}
                  />
                </h1>
              </TabsContent>
              <TabsContent value="unread" className="m-0">
                <MailList
                  mails={mails.filter((x) => !x.read)}
                  selectID={mail.id}
                  onClick={(mail) => setMail(mail)}
                />
              </TabsContent>
            </Tabs>
          </ResizablePanel>

          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={655} className="min-w-[50px]">
            <Display mail={mail} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
    </div>
  );
}
