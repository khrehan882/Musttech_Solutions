import axios from "axios";
import { useState } from "react";
import { API_URL } from "../../utils/API_URL";
import { toast } from "react-toastify";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log("Email submitted:", email);

    try {
 
      const response = await axios.post(`${API_URL}/contact/post`, {email});
 
      // Show a success toast notification
      toast.success(response.data.message);

      // Clear form fields
      // resetForm();
    } catch (error) {
      toast.error('There was an error submitting your form.');
      // console.log("error is in contact");
    }


    setEmail("");
  };






  return (
    <>
      {/* hero section start */}
      <div className="relative  w-full overflow-hidden ">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
            backgroundSize: "67px 67px",
          }}
        />

        {/* Red Gradient */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="520"
          height="536"
          viewBox="0 0 520 536"
          fill="none"
          className="absolute bottom-0 left-0"
        >
          <g filter="url(#filter0_f_2019_690)">
            <path
              d="M-426.36 478.333C-433.015 335.481 -109.378 -5.1713 -102.393 233.257C-95.4088 471.685 -55.6122 204.766 243.019 300.972C541.649 397.178 249.385 703.145 -8.4666 715.158C-266.318 727.171 -419.704 621.185 -426.36 478.333Z"
              fill="#EC2027"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_2019_690"
              x="-576.461"
              y="0.861816"
              width="1095.59"
              height="865.225"
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
                result="effect1_foregroundBlur_2019_690"
              />
            </filter>
          </defs>
        </svg>

        {/* white Gradient */}
        {/* <div className="absolute -top-20 -right-40  h-[300px] w-[300px] rounded-full bg-[#FFFFFF;] blur-[80px]" /> */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="587"
          viewBox="0 0 400 587"
          fill="none"
          className="absolute top-0 right-0 "
        >
          <g filter="url(#filter0_f_2019_691)">
            <path
              d="M502 107.861C502 257.485 352.209 597.753 354.029 348.224C355.848 98.6951 332.803 375.723 203.025 260.634C73.2469 145.545 208.483 -160 322.494 -160C436.505 -160 502 -41.7618 502 107.861Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_2019_691"
              x="0"
              y="-310"
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
                result="effect1_foregroundBlur_2019_691"
              />
            </filter>
          </defs>
        </svg>

        {/* Content */}
        <div className="relative max-w-[523px] mx-auto max-w-7xl px-6 py-16 md:pt-20 md:pb-52 ">
          <h1 className="mb-4 text-6xl font-bold leading-tight text-white md:text-8xl">
            Attract
            <br />
            <span
              style={{
                background:
                  "linear-gradient(217.81deg, #EC2027 25.05%, #FFFFFF 42.45%, #EC2027 61.31%, #EC2027 79.45%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              NewLeads
            </span>
            <br />
            like never
            <br />
            before
          </h1>

          <p className="mb-8 text-base text-white/100">
            At MustTech Solutions, we craft the future—innovating today to
            empower your tomorrow.
          </p>

          <form onSubmit={handleSubmit} className="flex max-w-xl gap-4">
            <input
              type="email"
              name = "email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full rounded-full  bg-transparent px-6 py-3 text-white ring-1 ring-gray-300 placeholder:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <button
              type="submit"
              className="rounded-full bg-[#EC2027;] px-6 py-3 font-semibold text-black transition-colors hover:bg-red-600"
            >
              SEND
            </button>
          </form>
        </div>
      </div>

      {/* hero section end */}
    </>
  );
}
