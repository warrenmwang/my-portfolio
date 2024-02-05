import React from 'react';
import Tile from './Tile';
import './TileHolder.css'; 
import { TileData } from './Tile'

interface TileHolderParams {
  titleText: string;
  tiles: TileData[]; 
}

const TileHolder: React.FC<TileHolderParams> = ({ titleText, tiles }) => {
  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-center py-5">
        <h1 className="text-6xl font-bold">{titleText}</h1>
      </header>
      <main className="grid-container">
        {tiles.map((tile, index) => (
          <Tile
            key={index}
            mainText={tile.mainText} 
            subText={tile.subText} 
            imageURL={tile.imageURL} 
            childNode={tile.childNode}
          ></Tile>
        ))}
      </main>
    </div>
  );
};

export default TileHolder;