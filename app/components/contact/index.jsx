import SectionTitle from "../helper/section-title";
import ContactForm from "./contact-form";

function ContactMe() {

  return (
    <div id="contact" className="border-t my-12 lg:my-24 border-[#25213b]">
      <SectionTitle title="Contact Me" />

      <div className="w-full flex justify-center py-12">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactMe;