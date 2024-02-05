import React, { ReactNode } from 'react';
import Tile from './Tile'
import { TileData } from './Tile'

type SideScrollerProps = {
  tiles: TileData[];
};

const SideScroller: React.FC<SideScrollerProps> = ({ tiles }) => {
  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-center py-5"> 
        <h1 className="text-6xl font-bold">Work Experience</h1>
      </header>
      <div className="flex justify-center py-5">
        <div className="flex overflow-x-auto space-x-4 py-4 px-2">
          {tiles.map((tile, index) => (
            <Tile
              key={index}
              mainText={tile.mainText} 
              subText={tile.subText} 
              imageURL={tile.imageURL} 
              childNode={tile.childNode}
            ></Tile>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideScroller;