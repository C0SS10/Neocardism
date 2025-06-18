import Tile from "@components/atoms/Tile";
import TileMenu from "@components/atoms/TileMenu";

const Home = () => {
  return (
    <section className="w-full h-screen flex items-center justify-around bg-emerald-600 font-sans">
      <Tile className="text-emerald-950 text-4xl">
        <h2>-</h2>
      </Tile>
      <TileMenu />
    </section>
  );
};

export default Home;
