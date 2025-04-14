import sideImage from './Assets/home_right.svg';
import brandLogo from './Assets/logo.svg';
import menuLogo from './Assets/menu.svg';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#010101] text-white font-sans">
      {/* Banner */}
      <div className="w-full bg-gradient-to-r from-[#ff0050] via-[#9359b0] to-[#00c2ff] text-white text-[16px] md:text-[22px] font-[800] py-[15px] sm:py-auto lg:py-[12px] h-[76px] lg:h-[46px] text-center leading-[20px] px-4">
        <span role="img" aria-label="rocket">🚀</span>{' '}
        <span className="text-[#00ffe0]">FRESH BEGINNINGS SALE:</span>{' '}
        Extra 25% OFF, Limited Spots – start your journey <span className="font-bold">today!</span>
      </div>

      {/* Header */}
      <div className="flex justify-end gap-[100px] md:justify-between  items-center px-6 py-4 lg:ml-[211px] lg:mx-[211px]">
        <img src={brandLogo.src || brandLogo} alt="Brand Logo" className="w-[150px] md:w-[170px]" />
        <nav className="gap-[20px] md:gap-[40px] hidden md:flex">
          <button className="cursor-pointer text-[16px] md:text-[18px] font-[600] text-[#A9A9A9]">About Us</button>
          <button className="cursor-pointer text-[16px] md:text-[18px] font-[600] text-[#A9A9A9]">Contact</button>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white">
            <img src={menuLogo.src || menuLogo} alt="Menu" className="w-[30px] h-[30px]" />
          </button>
        </div>
      </div>

      {/* Hero */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 gap-8 md:gap-10 lg:ml-[211px] relative">
        <div className="xl:w-1/2 space-y-4 lg:space-y-6 relative xl:absolute">
          <p className="text-[24px] md:text-[30px] lg:text-[35px] mx-[10px] md:mx-0 font-[700] font-urbanist leading-[1.2]">
            Want to Turn Social Media Into a Profitable Career?
          </p>
          <p className="text-[24px] md:text-[30px] lg:text-[35px] max-w-full md:max-w-[516px] font-[700] font-urbanist leading-[1.2] text-[#00E7F9] drop-shadow-[2px_2px_0_#FC004E] tracking-normal">
            Discover your way to success with Fametonic:
          </p>
          <div className="space-y-1 text-sm text-gray-400 max-w-full md:max-w-[516px]">
            <p className='flex text-[14px] md:text-[16px] font-[600] leading-[20px] md:leading-[22px]'>
              <div className="mr-2">✨</div>Start growing your influence right away—no waiting required!
            </p>
            <p className='flex not-[]:text-[14px] md:text-[16px] font-[600] leading-[20px] md:leading-[22px]'>
              <div className="mr-2">✨</div>Create viral TikToks and Reels step by step with easy-to-follow lessons
            </p>
            <p className='flex text-[14px] md:text-[16px] font-[600] leading-[20px] md:leading-[22px]'>
              <div className="mr-2">✨</div>Use a Personal AI Worker to boost your content
            </p>
            <p className='flex text-[14px] md:text-[16px] font-[600] leading-[20px] md:leading-[22px]'>
              <div className="mr-2">✨</div>Learn from expert-led courses designed for aspiring influencers
            </p>
          </div>

          <div className='md:hidden flex flex-col items-center'>
            <p className='text-[10px] md:text-[12px] max-w-full md:max-w-[516px] font-[500] text-[#ABABAB] text-center mb-[5px]'>By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>
            <p className='text-[8px] md:text-[10px] font-[500] text-[#ABABAB]'>Fametonic 2025 ©All Rights Reserved.</p>
          </div>
          <div>
            <button className="bg-[#FC004E] justify-center text-white font-bold py-2 px-6 w-full md:w-[313px] rounded-[10px] shadow-[2px_2px_10px_0px_#00E7F9] hover:shadow-[2px_2px_15px_0px_#00E7F9] transition-all duration-300 flex items-center gap-2">
              GET STARTED
              <span className="text-lg mb-[3px]">{'>'}</span>
            </button>
            <p className='text-[400] justify-center text-center mt-[10px] w-full md:w-[313px] text-[12px] leading-[16px]'>1-minute quiz for personalized Insights</p>
          </div>

          <div className='hidden md:block'>
            <p className='text-[10px] md:text-[12px] max-w-full md:max-w-[516px] font-[500] text-[#ABABAB]'>By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>
            <p className='text-[8px] md:text-[10px] font-[500] text-[#ABABAB]'>Fametonic 2025 ©All Rights Reserved.</p>
          </div>
        </div>

        <div className="xl:w-1/2 flex justify-center ml-[0px] xl:ml-[459px]">
          <div className='w-full mx-[10px] md:mx-[0px] xl:max-w-[666px] h-auto'>
            <img src={sideImage.src || sideImage} alt="Side Image" />
          </div>
        </div>
      </section>
    </div>
  );
}