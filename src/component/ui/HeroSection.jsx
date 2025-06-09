import { Link } from "react-router-dom";

export default function HeroSection({ data }) {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] bg-black overflow-hidden">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "67px 67px",
        }}
      />

      {/* Gradient Effects */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="424"
        height="631"
        viewBox="0 0 424 631"
        fill="none"
        className="absolute bottom-0 right-0 "
      >
        <g filter="url(#filter0_f_36_39)">
          <path
            d="M502 151.861C502 301.485 352.209 641.753 354.029 392.224C355.848 142.695 332.803 419.723 203.025 304.634C73.2469 189.545 208.483 -116 322.494 -116C436.505 -116 502 2.23816 502 151.861Z"
            fill={`${data.color1}`}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_36_39"
            x="0"
            y="-266"
            width="652"
            height="897"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_36_39"
            />
          </filter>
        </defs>
      </svg>

      {/* Gradient Effects */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0"
        width="436"
        height="326"
        viewBox="0 0 436 326"
        fill="none"
      >
        <g filter="url(#filter0_f_36_48)">
          <path
            d="M-201.037 351.096C-205.111 263.638 -6.971 55.0806 -2.69488 201.053C1.58125 347.026 25.9459 183.61 208.777 242.511C391.607 301.411 212.674 488.733 54.8099 496.088C-103.054 503.443 -196.962 438.555 -201.037 351.096Z"
            fill={`${data.color2}`}
          />
        </g>
        <defs>
          <filter
            id="filter0_f_36_48"
            x="-351.098"
            y="0.608643"
            width="787.082"
            height="646.048"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="75"
              result="effect1_foregroundBlur_36_48"
            />
          </filter>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative mx-auto container px-6 py-16 md:py-20">
        <span className="mb-5 inline-block text-2xl font-bold text-customred">
          {data.page}
        </span>
        <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
          {data.title}
        </h1>
        <p className="mb-8 text-sm max-w-[523px]  font-normal leading-relaxed text-white/100 md:text-base">
          {data.description}
        </p>
        <Link
          to="/contact"
          className="inline-block rounded-full bg-red-500 px-6 py-3 font-semibold text-black transition-colors hover:bg-red-600"
        >
          
          {data.button.toUpperCase()}


        </Link>
      </div>
    </section>
  );
}
