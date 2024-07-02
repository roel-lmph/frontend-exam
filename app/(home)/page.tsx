import Header from "@/components/Header";
import ClientReview from "./ClientReview";

import avatar1 from '../../public/avatar1.png'
import avatar2 from '../../public/avatar2.png'
import avatar3 from '../../public/avatar3.png'
import ZipCodeInput from "./ZipCodeInput";
import CategorySelect from "./CategorySelect";
import Footer from "@/components/Footer";

const reviews = [
  {
    avatar: avatar1,
    name: "Mitchell M.",
    address: "Cherry Hill, NJ",
    category: "Family Law",
    reviewText: "This lawyer exceeds my expectations. I found Attorney Mullen to be very reliable, courteous and prompt...",
  },
  {
    avatar: avatar2,
    name: "Joel C.",
    address: "Little Rock, AK",
    category: "Job & Employment Law",
    reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ... dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
  },
  {
    avatar: avatar3,
    name: "Brigada R.",
    address: "Dallas, TX",
    category: "Family Law",
    reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ... ",
  },
]



export default function Home() {
  return (
    <main className="">
      <Header />
      {/* <MyOwnModal /> */}
      <div id="content" className="bg-gradient-to-br from-[#042F6E] to-white">
        <div className="container">
          <div className="text-[41px] font-gothamLight">
            Find a Lawyer for your Legal Issue
          </div>
          <div className="text-[29px]">
            Fast, Free and Confidential
          </div>

          <div className="">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2">
                {/* Content for the first column */}
                <div className="pt-10 flex flex-col gap-y-8 w-3/4">
                  <div >
                    <ZipCodeInput />
                  </div>
                  <div>
                    <CategorySelect />

                  </div>
                  <p className="text-center font-gothamBook">
                    Can't find your category? <a className="underline underline-offset-2">Click here.</a>
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                {/* Content for the second column */}
                <div className="" id="client-reviews">
                  <p className="mb-2 text-2xl">Clients review LegalMatch lawyers</p>
                  {reviews.map((review, i) =>
                    <ClientReview key={`r-${i}`} {...review} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pt-9">
        <Footer />
      </section>
    </main>
  );
}
