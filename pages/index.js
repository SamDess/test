import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import Link from 'next/link';
import { signIn, useSession, signOut } from 'next-auth/react'
import Shop from '../components/Shop'
import Cart from '../components/Cart'

export default function Home() {
  const { data: session, status } = useSession()
  const names = useSWR('/api/all', fetcher).data;
function renderAuthButton() {
    return (
      <div className="min-h-screen container mx-auto px-6 py-12 flex flex-col items-center justify-center">
        <h1 className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <span className="sm:h-16 text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-700 text-center">
            Bronco Store
          </span>
        </h1>
        <p className="mt-4 text-gray-500 text-xl sm:text-2xl text-center">
          Please be sure to sign in before shopping!
        </p>
        <div className="mt-8">
          {session?.user ? (
            <div className="text-lg flex flex-col space-y-1 bg-gray-200 rounded-lg px-6 py-3">
              <p>
                Signed in as <strong>{session.user.email}</strong>
              </p>
              
              <button
              onClick={signOut}
              className="font-semibold underline opacity-70 hover:opacity-100">
              Sign Out
            </button>
            </div>
          ) : (
            <Link href="/api/auth/signin" className="px-6 py-3 rounded-md text-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition">
              Get started
            </Link>
          )}
        </div>
      </div>
    );
}
    return (
      <div id="body">
        {/* text-left bg-blue-900 pl-28 text-white row */}
        <div className=" bg-sky-200 pl-28 text-blue-700 row" style={{ padding: "20px" }}> {/*mainheader */}
          <span className="text-left">
            <b>
            <h1 className="text-3xl ">Bruh Store</h1>
          </b>
          </span>
          
          <div className='styles.authContainer'>
            {renderAuthButton()}
          </div>
          {session && session.user.name}
          
        </div>
        {/* p-5 bg-blue-200 text-center text-white text-base grid gap-4 grid-cols-6 grid-rows-1 */}
        
        <div className="p-3 text-center bg-pink-100 text-black text-lg grid gap-3 grid-cols-2 grid-rows-1">{/*subheader*/}
          <span>
            <a href="/"> {/* className="border-black border-t border-b rounded" */}
              <b> Home </b>
            </a>
          </span>
          <span>
            <a href="/artpage"> {/* className="border-black border-t border-b rounded" */}
              <b>Handmade</b>
            </a>
          </span>

          <div className="col-1" />         
        </div>
        <div className="flex">    
          <Shop />
          <Cart />
        </div>
      </div>

    );
  }
