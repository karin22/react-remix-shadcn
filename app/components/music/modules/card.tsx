import type { Album } from "../data";

interface Props {
  item: Album;
  width: number;
  height: number;
}

export default function Card({ item, width, height }: Readonly<Props>) {
  return (
    <div className={`space-y-1 text-sm w-[${width}px]`}>
      <div className={`overflow-hidden rounded-md h-[${height}px]`}>
        <img
          alt={item.name}
          loading="lazy"
          className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
          src={item.cover}
        />
      </div>
      <h3 className="font-medium leading-none pt-2">{item.name}</h3>
      <p className="text-xs text-muted-foreground">{item.artist}</p>
    </div>
  );
}
