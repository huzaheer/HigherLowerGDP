import React from "react";

function GDPComparison(props) {
  const handleHigherClick = () => {
    console.log("hello")
  };

  const handleLowerClick = () => {
    console.log("yellow")
  };

  return (
    <div className="bg-white flex flex-col justify-center items-stretch">
      <header className="flex-col overflow-hidden relative flex min-h-[700px] w-full pt-10 pb-2 px-5 items-end max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f0128612f6567d4f8b83a81ded3b16cd9b3bf0ee01894f56ae6e7f806209c01e?apiKey=d129e6ace9284e83ae8a2e3cdae11c7d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0128612f6567d4f8b83a81ded3b16cd9b3bf0ee01894f56ae6e7f806209c01e?apiKey=d129e6ace9284e83ae8a2e3cdae11c7d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0128612f6567d4f8b83a81ded3b16cd9b3bf0ee01894f56ae6e7f806209c01e?apiKey=d129e6ace9284e83ae8a2e3cdae11c7d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0128612f6567d4f8b83a81ded3b16cd9b3bf0ee01894f56ae6e7f806209c01e?apiKey=d129e6ace9284e83ae8a2e3cdae11c7d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0128612f6567d4f8b83a81ded3b16cd9b3bf0ee01894f56ae6e7f806209c01e?apiKey=d129e6ace9284e83ae8a2e3cdae11c7d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0128612f6567d4f8b83a81ded3b16cd9b3bf0ee01894f56ae6e7f806209c01e?apiKey=d129e6ace9284e83ae8a2e3cdae11c7d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0128612f6567d4f8b83a81ded3b16cd9b3bf0ee01894f56ae6e7f806209c01e?apiKey=d129e6ace9284e83ae8a2e3cdae11c7d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0128612f6567d4f8b83a81ded3b16cd9b3bf0ee01894f56ae6e7f806209c01e?apiKey=d129e6ace9284e83ae8a2e3cdae11c7d&"className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative z-[1] flex w-[749px] max-w-full flex-col mr-48 items-start max-md:mr-2.5">
          <div className="flex gap-0.5 items-start max-md:max-w-full max-md:flex-wrap">
            <h1 className="text-orange-400 text-5xl font-bold grow shrink basis-auto mt-2.5 max-md:max-w-full max-md:text-4xl">Higher Lower GDP</h1>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c0bf6830-839d-4d68-b2a3-c8d4612db788?apiKey=d129e6ace9284e83ae8a2e3cdae11c7d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0bf6830-839d-4d68-b2a3-c8d4612db788?apiKey=d129e6ace9284e83ae8a2e3cdae11c7d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0bf6830-839d-4d68-b2a3-c8d4612db788?apiKey=d129e6ace9284e83ae8a2e3cdae11c7d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0bf6830-839d-4d68-b2a3-c8d4612db788?apiKey=d129e6ace9284e83ae8a2e3cdae11c7d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0bf6830-839d-4d68-b2a3-c8d4612db788?apiKey=d129e6ace9284e83ae8a2e3cdae11c7d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0bf6830-839d-4d68-b2a3-c8d4612db788?apiKey=d129e6ace9284e83ae8a2e3cdae11c7d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0bf6830-839d-4d68-b2a3-c8d4612db788?apiKey=d129e6ace9284e83ae8a2e3cdae11c7d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0bf6830-839d-4d68-b2a3-c8d4612db788?apiKey=d129e6ace9284e83ae8a2e3cdae11c7d&"className="aspect-[0.68] object-contain object-center w-[43px] stroke-[3.692px] stroke-orange-400 overflow-hidden self-stretch shrink-0 max-w-full"
            />
          </div>
          <div className="flex w-[212px] max-w-full flex-col items-stretch mt-28 self-end max-md:mt-10">
            <h2 className="text-white text-4xl font-bold whitespace-nowrap">Country A</h2>
            <div className="shadow-sm bg-black bg-opacity-0 flex justify-between gap-1.5 pl-9 pr-8 py-8 rounded-[60px] border-4 border-solid border-orange-400 items-start max-md:px-5">
              <button className="text-orange-400 text-center text-3xl tracking-widest grow whitespace-nowrap" onClick={handleHigherClick}>
                Higher
              </button>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bac53f3ed0612420609a717f56f148290263e39f2c6eac85d5b06101a0e16e43?apiKey=d129e6ace9284e83ae8a2e3cdae11c7d&"
                className="aspect-[0.67] object-contain object-center w-[22px] stroke-[3px] stroke-orange-400 overflow-hidden shrink-0 max-w-full"
                alt="higher arrow"
              />
            </div>
            <div className="shadow-sm bg-black bg-opacity-0 flex justify-between gap-1.5 mt-5 pl-11 pr-9 py-8 rounded-[60px] border-4 border-solid border-orange-400 items-start max-md:px-5">
              <button className="text-orange-400 text-center text-3xl tracking-widest grow whitespace-nowrap" onClick={handleLowerClick}>
                Lower
              </button>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a0e66158fd55d9c3885b798937a8f689801da779dbebc35f25091d19bd0ddf8?apiKey=d129e6ace9284e83ae8a2e3cdae11c7d&"
                className="aspect-[0.65] object-contain object-center w-[22px] stroke-[3px] stroke-orange-400 overflow-hidden self-stretch shrink-0 max-w-full"
                alt="lower arrow"
              />
            </div>
          </div>
        </div>
        <div className="relative text-white text-center text-4xl font-bold mt-0 max-w-[290px] ml-32 self-start max-md:mt-0 max-md:ml-2.5">
          Country B $4,000,000,000
          <br />
        </div>
        <div className="relative text-white text-3xl font-bold self-stretch w-full mt-60 max-md:max-w-full max-md:mt-10">Score: 0</div>
      </header>
    </div>
  );
}

export default GDPComparison;