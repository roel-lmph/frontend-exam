import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientReviewsModal from "./components/ClientReviewsModal";
import OtherCategoriesModal from "./components/OtherCategoriesModal";
import InquiryForm from "./components/InquiryForm";



export default function Home() {
  return (
    <main className="">
      <Header />
      <div id="content" className="bg-gradient-to-br from-[#042F6E] to-white">
        <div className="container">

          <InquiryForm />
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
