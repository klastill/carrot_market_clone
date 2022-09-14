import type { NextPage } from "next";

const ItemDetail: NextPage = () => {
  return (
    <div className="px-4 py-10">
      <div className="mb-8">
        <div className="h-96 bg-slate-200" />
        <div className="flex cursor-pointer items-center space-x-3 py-3 border-b">
          <div className="w-12 aspect-square rounded-full bg-slate-200" />
          <div>
            <p className="text-base font-medium text-gray-700">Steve Jebs</p>
            <p className="text-xs font-medium text-gray-700">
              View profile &rarr;
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="text-3xl font-bold text-gray-700">Galaxy S50</h1>
          <span className="text-2xl text-gray-700 block">$140</span>
          <p className="my-8 text-gray-700">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
          <div className="flex items-center justify-between space-x-2">
            <button className="flex-1 py-2 rounded-mdbase font-medium text-white bg-orange-400 hover:bg-orange-500 border border-transparent shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
              Talk to seller
            </button>
            <button className="p-2 flex justify-center items-center text-gray-400 hover:bg-gray-50 hover:text-red-400 rounded-md">
              <svg
                className="h-6 w-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold text-gray-700 mb-4">Similar items</h2>
        <div className="grid grid-cols-2 gap-4">
          {new Array(6).fill(1).map((_, i) => (
            <div key={i} className="px-4">
              <div className="rounded-md w-full aspect-square bg-slate-200 mb-2" />
              <h3 className="text-base font-bold text-gray-700">Galaxy S60</h3>
              <p className="text-base font-medium text-gray-700">$6</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
