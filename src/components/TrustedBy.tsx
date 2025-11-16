import companyAirtel from "@/assets/company-airtel.png";
import companyGoogle from "@/assets/company-google.png";
import companyAsus from "@/assets/company-asus.png";
import companyIntel from "@/assets/company-intel.png";
import companyPepsi from "@/assets/company-pepsi.png";
import companyApple from "@/assets/company-apple.png";

const companies = [
  { name: "Airtel", logo: companyAirtel },
  { name: "Google", logo: companyGoogle },
  { name: "ASUS", logo: companyAsus },
  { name: "Intel", logo: companyIntel },
  { name: "Pepsi", logo: companyPepsi },
  { name: "Apple", logo: companyApple },
];

const TrustedBy = () => {
  return (
    <section className="pb-20 pt-8 px-4 md:px-6 lg:px-8 bg-background" id="trusted-by">
      <div className="max-w-7xl mx-auto">
        <div className="scroll-reveal bg-card/30 backdrop-blur-sm rounded-2xl py-16 px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-semibold text-foreground">
              Trusted by
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {companies.map((company, index) => (
              <div
                key={index}
                className="transition-all duration-300 hover:scale-110"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-10 md:h-12 lg:h-14 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
