import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientReviewsModal from "./components/ClientReviewsModal";
import OtherCategoriesModal from "./components/OtherCategoriesModal";
import InquiryForm from "./components/InquiryForm";



export default function Home() {
  return (
    <>
      <Header />
      <main id="content">
        <div className="container">
          <InquiryForm />
        </div>

        <ClientReviewsModal />
        <OtherCategoriesModal />
      </main>
      <Footer />
    </>
  );
}
