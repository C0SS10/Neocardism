import type { TileProps } from "@/src/types/TileTypes";
import cn from "classnames";

const Tile = ({ children, className }: TileProps) => {
  return (
    <div
      className={cn(
        "rounded-xl shadow-[0.8em_0.8em_4em_#00d58e,-0.8em_-0.8em_4em_#004329] min-w-[42rem] min-h-[24rem] p-4 flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Tile;
