import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const Playlist = () => {
  const [songs, setSongs] = useState<string[]>([]);
  const [songInput, setSongInput] = useState("");

  const addSong = () => {
    if (songInput.trim() === "") return;
    setSongs([...songs, songInput]);
    setSongInput("");
  };

  const removeSong = (index: number) => {
    setSongs(songs.filter((_, i) => i !== index));
  };

  return (
    <section id="playlist" className="flex flex-col items-center py-10 px-6">
      <div className="bg-black bg-opacity-40 backdrop-blur-lg p-6 rounded-xl shadow-lg w-full md:w-1/2">
        <h2 className="text-3xl font-semibold text-center mb-4">Your Playlist</h2>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={songInput}
            onChange={(e) => setSongInput(e.target.value)}
            className="p-3 w-full bg-gray-800 text-white rounded-lg focus:ring focus:ring-gray-500 outline-none"
            placeholder="Enter song name..."
          />
          <button onClick={addSong} className="bg-blue-500 px-4 py-3 rounded-lg hover:bg-blue-600">
            Add
          </button>
        </div>

        <ul className="mt-6 space-y-3">
          {songs.map((song, index) => (
            <li
              key={index}
              className="bg-gray-800 p-3 rounded-lg flex justify-between items-center shadow-md"
            >
              {song}
              <button onClick={() => removeSong(index)} className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Playlist;
