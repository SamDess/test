import useSWR from "swr";
import fetcher from "../lib/fetcher";
import Shop from "../components/Shop";
import ShopCartButton from "../components/ShopCartButton";

export default function Home() {
  const names = useSWR("/api/brS", fetcher).data;
  return (
    <div id="body">
      <div
        style={{
          backgroundImage:
            "url(https://www.nisd.net/sites/default/files/styles/homepage_hero_1200x650/public/images/img_0515_0.jpg?h=5dc9785f&itok=vzrjM14e)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="bg-[#2191FB] pl-28  text-blue-700 row p-[20px]"
      >
        <div className="min-h-screen container mx-auto px-6 py-12 flex flex-col items-center justify-center">
          <h1 className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <span className="sm:h-16 text-4xl sm:text-6xl font-extrabold bg-clip-text text-white text-center">
              Bronco Store
            </span>
          </h1>
          <p className="mt-4 text-white text-xl sm:text-2xl text-center">
            Welcome to the Online Bronco Store!
          </p>
        </div>
      </div>
      <div className="p-3 font-bold text-center bg-sky-400 rounded-lg border-8 border-[#0e62b0] text-black text-lg grid gap-3 grid-cols-2 grid-rows-1">
        {/*subheader*/}
        <div className="text-[#0A1045] hover:text-white">
          <a href="/">Home</a>
        </div>
        <div className="text-[#0A1045] hover:text-white">
          <a href="/artpage">Handmade</a>
        </div>
        <div className="col-1" />
      </div>
      <div className="flex">
        <Shop names={names} />
        <ShopCartButton />
      </div>
    </div>
  );
}
