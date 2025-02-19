import React, { useState } from "react";
import { repertorio } from "../constants";

const Songs = () => {
  const [search, setSearch] = useState("");
  const [artistFilter, setArtistFilter] = useState("All");

  const filteredSongs = repertorio.filter(
    (song) =>
      song.title.toLowerCase().includes(search.toLowerCase()) &&
      (artistFilter === "All" || song.artist === artistFilter)
  );

  const uniqueArtists = [
    "All",
    ...new Set(repertorio.map((song) => song.artist)),
  ];

  return (
    <div className="w-full h-screen p-8 space-y-8">
      <div className="flex gap-4 ">
        <input
          type="text"
          placeholder="Buscar canción..."
          className="w-1/2 p-2 rounded text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="w-1/2 p-2 rounded text-white"
          value={artistFilter}
          onChange={(e) => setArtistFilter(e.target.value)}
        >
          {uniqueArtists.map((artist) => (
            <option key={artist} value={artist}>
              {artist}
            </option>
          ))}
        </select>
      </div>

      <div className="max-h-[85vh] justify-items-center overflow-y-auto scrollbar-hide">
        <ul className="space-y-2 ">
          {filteredSongs.length > 0 ? (
            filteredSongs.map((song) => (
              <li key={song.id} className="p-2 text-white font-light">
                {song.title} - <span className="text-brown font-light">{song.artist}</span>
              </li>
            ))
          ) : (
            <li className="text-gray">No se encontraron resultados</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Songs;
