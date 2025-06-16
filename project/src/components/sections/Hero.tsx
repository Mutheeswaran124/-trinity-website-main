import React, { useRef } from 'react';
import Button from '../ui/Button';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import mainhero from '../../animations/mainhero.lottie?url'
const partnerLogos = [
    'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
    'https://www.levelequity.com/wp-content/uploads/level-investment-fivetran-logo.png',
    'https://www.getdbt.com/_next/image?url=%2Fimg%2Flogos%2Fdbt-labs-logo.svg&w=256&q=75',
    'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    'https://odoocdn.com/openerp_website/static/src/img/assets/png/odoo_logo.png'
];

const Hero: React.FC = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.3 });

    const carouselStyle = `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .logo-track {
      animation: marquee 20s linear infinite;
    }
  `;

    return (
        <div className="pt-16 sm:pt-20 md:pt-36 pb-8 md:pb-16 bg-white">
            <style dangerouslySetInnerHTML={{ __html: carouselStyle }} />

            {/* ✅ Main Content Container */}
            <div ref={ref} className="mx-auto px-4 max-w-[1200px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-10 md:gap-x-12 items-center">
                    {/* Left Side (Text) */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl mx-auto lg:mx-0 flex flex-col"
                    >
                        <div className="flex items-center gap-1 sm:gap-2 bg-white rounded-full px-3 sm:px-4 md:px-5 py-1 w-fit mb-2 sm:mb-3 md:mb-4 mt-4 shadow-md border border-blue-900/40 backdrop-blur-sm">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png"
                                alt="Databricks"
                                className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 object-contain"
                            />
                            <a
                                href="https://www.databricks.com/partners"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-[#22396b] font-bold text-xs sm:text-sm md:text-base tracking-wide hover:underline"
                            >
                                Trinity-databricks consulting partner
                                <ArrowUpRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>

                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 text-[#22396b]">
                            Empowering Data-<span style={{ color: '#3d3dff' }}>Driven Decisions Across the Globe</span>
                        </h1>

                        <p className="text-lg mb-4 text-[#22396b]" style={{ fontFamily: 'Roboto, sans-serif' }}>
                            Harnessing the power of data analytics to transform businesses in Oman, Netherlands, USA, and India.
                        </p>

                        <Button
                            variant="primary"
                            size="lg"
                            className="bg-[#22396b] hover:bg-[#3d3dff] text-base px-8 font-bold rounded-full text-white w-[250px] h-[56px]"
                        >
                            See What's Different
                        </Button>
                    </motion.div>

                    {/* Right Side Lottie */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
                        transition={{ duration: 1.2, ease: "easeOut", type: "spring", stiffness: 60 }}
                        className="flex justify-center items-center w-full h-full -mt-14"
                    >
                        <DotLottieReact
                            src={mainhero}
                            loop
                            autoplay
                            style={{ width: '100%', maxWidth: 560, height: 560 }}
                        />
                    </motion.div>
                </div>

               {/* Footer Section */}
<div className="mt-8 md:mt-14 -mb-4"> 
    <div className="text-center mb-4 md:mb-8">
        <p className="text-black font-bold text-lg sm:text-2xl md:text-2xl">
            Trusted by industry leaders in data and analytics
        </p>
    </div>
</div>
            </div>

          {/* ✅ Full-width Moving Logo Carousel */}
<section className="logo-carousel overflow-hidden relative mt-4 md:mt-8 pt-4 md:pt-6 pb-4 md:pb-8 w-screen bg-white">
    <div className="max-w-none mx-auto">
        <div className="logo-track flex items-center gap-10 md:gap-20 w-max px-4">
            {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
                <img
                    key={idx}
                    src={logo}
                    alt={`Partner logo ${idx + 1}`}
                    className="h-6 sm:h-8 md:h-12 w-auto object-contain transition"
                    loading="eager"
                />
            ))}
        </div>
    </div>
</section>
        </div>
    );
};

export default Hero;
