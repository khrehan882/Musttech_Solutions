
export default function TrustedBrands() {
  // Each array is duplicated to create seamless infinite scroll
  const topRowLogos = [
    'brand-r1', 'brand-r2', 'brand-r3', 'brand-r4',  'brand-r5', 'brand-r6', 
    'brand-r1', 'brand-r2', 'brand-r3', 'brand-r4',  'brand-r5', 'brand-r6',   // Duplicated
  ]

  const bottomRowLogos = [
    'brand-r2.1', 'brand-r2.2', 'brand-r2.3', 'brand-r2.4', 'brand-r2.5',
    'brand-r2.1', 'brand-r2.2', 'brand-r2.3', 'brand-r2.4', 'brand-r2.5', // Duplicated
  ]

  return (
    <section className="bg-black py-16 md:pt-20 md:pb-28 overflow-hidden">
      <div className="mx-auto container px-6">
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          <h2 className="text-4xl font-bold text-white md:text-4xl lg:text-4xl lg:leading-[56px]">
            Trusted by 200+ companies around the world
          </h2>
          <p className="text-base text-white/100 font-normal">
            With over 200 companies worldwide placing their trust in us, MustTech Solutions
            has become a global partner for innovation and reliability. From custom software
            to cutting-edge web and mobile solutions, we empower businesses with
            technology tailored to their unique needs.
          </p>
        </div>

        {/* Sliding Logos - Top Row (Left to Right) */}
        <div className="mb-8 overflow-hidden">
          <div className="flex animate-slide-left">
            {topRowLogos.map((logo, index) => (
              <div
                key={index}
                className="mx-4 flex h-20 min-w-[192px] items-center justify-center rounded-lg border border-[#ffffff]  bg-[#000000] "
              >
                {/* <span className="text-xl font-semibold text-white">{logo}</span> */}

                <img
                  src={`/images/brands/${logo}.png`} // Use the image path from the array
                  alt={`Logo ${index + 1}`} // Unique alt text for accessibility
                  width={150} // Set desired width
                  height={40} // Set desired height
                  priority // Optional: Preload the image
                  className = "object-contain p-6"
                />

              </div>
            ))}
          </div>
        </div>

        {/* Sliding Logos - Bottom Row (Right to Left) */}
        <div className="overflow-hidden">
          <div className="flex animate-slide-right">
            {bottomRowLogos.map((logo, index) => (
              <div
                key={index}
                className="mx-4 flex h-20 min-w-[192px] items-center justify-center rounded-lg border border-[#ffffff]   bg-[#000000] "
              >

<img
                  src={`/images/brands/${logo}.png`} // Use the image path from the array
                  alt={`Logo ${index + 1}`} // Unique alt text for accessibility
                  width={150} // Set desired width
                  height={40} // Set desired height
                  priority // Optional: Preload the image
                  className = "object-contain p-6"
                />

                {/* <span className="text-xl font-semibold text-white">{logo}</span> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

