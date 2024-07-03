import Header from "@/components/Header";
import ClientReview from "./ClientReview";

import avatar1 from '../../public/avatar1.png'
import avatar2 from '../../public/avatar2.png'
import avatar3 from '../../public/avatar3.png'
import ZipCodeInput from "./ZipCodeInput";
import CategorySelect from "./CategorySelect";
import Footer from "@/components/Footer";
import ClientReviewsModal from "./ClientReviewsModal";
import { reviews } from "@/dummy-data";
import OtherCategoriesModal from "./OtherCategoriesModal";



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
      <ClientReviewsModal />
      <OtherCategoriesModal />
    </main>
  );
}
