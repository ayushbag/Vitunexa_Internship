import Navbar from "./components/Navbar";
import Playlist from "./components/Playlist";

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
      <Navbar />
      <header className="text-center py-24">
        <h1 className="text-5xl font-extrabold tracking-tight">MyPlaylist</h1>
        <p className="text-lg text-gray-400 mt-3">Organize your music effortlessly.</p>
      </header>
      <Playlist />
    </div>
  );
}

export default App;
