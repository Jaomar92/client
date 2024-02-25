import About from "@/components/Home/About/page";
import Contact from "@/components/Home/Contact";
import Features from "@/components/Home/Features";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/Home/HomeBanner";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Home/Testimonials/page";
import AnimatedScroll2 from "@/components/animatedScroll-ii";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-screen/2">
        {/* banner -- Start */}
        <HomeBanner />
        {/* banner -- end */}
        {/* Features -- Start */}
        <section>
          <Features />
        </section>
        {/* Features -- End */}
        {/* About -- Start */}
        <section className="bg-slate-300 h-fit">
          <About />
        </section>
        {/* About -- End */}
        {/* Clients -- End */}
        <section>
          <div className="bg-gray-950 h-fit py-6">
            <div className="container py-2">
              <div className="font-mono text-gray-300 text-4xl py-4">
                Our Clients{" "}
              </div>
              <div className="flex items-center justify-center">
                <AnimatedScroll2
                  items={[
                    {
                      company: "TenX Prime",
                    },
                    {
                      company: "Asian Supply Base.Sdn Bhd",
                    },
                    {
                      company: "J&T express",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>
        {/* Clients -- End */}
        {/* Testimonials -- Start */}
        <Testimonials />
        {/* Testimonials -- End */}
        {/* Contact -- start */}
        <section>
          <Contact />
        </section>
        {/* Contact -- end */}
      </main>
      <Footer />
    </>
  );
}
