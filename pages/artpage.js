import useSWR from "swr";
import fetcher from "../lib/fetcher";
import Shop from "../components/Shop";
import ShopCartButton from "../components/ShopCartButton";

export default function Home() {
  const names = useSWR("/api/crS", fetcher).data;
  return (
    <div id="body">
      <div
        style={{
          backgroundImage: "url(https://wallpaperaccess.com/full/658657.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="min-h-screen container mx-auto px-6 py-12 flex flex-col items-center justify-center">
          <div className="bg-[#F01D7F] bg-opacity-70 border-white border-4 p-24">
            <h1 className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <span className="sm:h-16 text-4xl sm:text-6xl font-extrabold  bg-clip-text text-white text-center">
                Handmade Items
              </span>
            </h1>
            <p className="mt-4 text-white text-xl sm:text-2xl text-center">
              Welcome to the Handmade Items Online Store!
            </p>
          </div>
        </div>
      </div>
      <div className="p-3 font-bold text-center bg-[#cdebfc] rounded-lg border-8 border-[#2191FB] text-black text-lg grid gap-3 grid-cols-2 grid-rows-1">
        {/*subheader*/}
        <div className="text-[#0A1045] hover:text-[#FFA500]">
          <a href="/">Home</a>
        </div>
        <div className="text-[#0A1045] hover:text-[#FFA500]">
          <a href="/artpage">Handmade</a>
        </div>
        <div className="col-1" />
      </div>
      <div>
        <Shop names={names} />
        <ShopCartButton />
      </div>
    </div>
  );
}
