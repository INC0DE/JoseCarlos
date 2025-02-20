import React, { useState } from "react";
import { repertorio } from "../constants";

const Songs = () => {
  const [search, setSearch] = useState("");
  const [artistFilter, setArtistFilter] = useState("All");

  const filteredSongs = repertorio.filter(
    (song) =>
      song.title.toLowerCase().includes(search.toLowerCase()) &&
      (artistFilter === "All" ||
        song.artist.toLowerCase() === artistFilter.toLowerCase())
  );

  const uniqueArtists = [
    "All",
    ...new Set(repertorio.map((song) => song.artist)),
  ];

  return (
    <div className="w-full h-screen p-6 space-y-6">
      {/* Barra de búsqueda y filtro */}
      <div className="flex flex-col-reverse sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Buscar canción..."
          className="w-full sm:w-1/2 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="w-full sm:w-1/2 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-500"
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

      {/* Lista de canciones */}
      <div className="max-h-[75vh] overflow-y-auto scrollbar-hide">
        <ul className="space-y-2">
          {filteredSongs.length > 0 ? (
            filteredSongs.map((song) => (
              <li
                key={song.id}
                className="p-3 text-white rounded-lg shadow-md transition-all duration-200 hover:bg-gray-700"
              >
                {song.title} -{" "}
                <span className="text-brown">{song.artist}</span>
              </li>
            ))
          ) : (
            <li className="text-gray text-center py-4">
              No se encontraron resultados
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Songs;
