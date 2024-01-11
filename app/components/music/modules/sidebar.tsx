import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";

import { playlists, discoverList, libraryList } from "../data";
import { PlayList } from "~/assets/icons";

export default function Sidebar() {
  return (
    <div className="pb-12">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            {discoverList.map((x, i) => (
              <Button
                variant={i > 0 ? "ghost" : "secondary"}
                className="w-full justify-start"
                key={x.name}
              >
                {x.icon}
                {x.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Library
          </h2>
          <div className="space-y-1">
            {libraryList.map((x) => (
              <Button
                variant="ghost"
                className="w-full justify-start"
                key={x.name}
              >
                {x.icon}
                {x.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Playlists
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {playlists?.map((playlist) => (
                <Button
                  key={playlist}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
                  {PlayList()}
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
