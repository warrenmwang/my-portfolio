import React from 'react';
import Tile from './Tile';
import './TileHolder.css'; 
import { TileData } from './Tile'

interface TileHolderParams {
  tiles: TileData[]; 
}

const TileHolder: React.FC<TileHolderParams> = ({ tiles }) => {
  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-center py-5">
        <h1 className="text-6xl font-bold">Projects</h1>
      </header>
      <main className="grid-container">
        {tiles.map((tile) => (
          <Tile
            mainText={tile.mainText} 
            subText={tile.subText} 
            imageURL={tile.imageURL} 
            project={tile.project}
          ></Tile>
        ))}
      </main>
    </div>
  );
};

export default TileHolder;