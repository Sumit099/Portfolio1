//components
import Circles from "../../components/Circles";

// icon
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full ">
      <div className="container mx-auto py-40 text-ceter xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <h2 className="h2 text-center mb-12 ">
            Let's <span className="text-accent">connect.</span>
          </h2>
          {/* form*/}
          <form className=" flex flex-1 flex-col gap-6 w-full mx-auto">
            {/* input group */}
            <div className="flex gap-x-4">
              <input type="text" placeholder="name" className="input" />
              <input type="text" placeholder="email" className="input" />
            </div>
            <input type="text" placeholder="subject" className="input" />
            <textarea placeholder="message" className="textarea"></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group ">
              <span className="group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Let's talk</span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 "/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
