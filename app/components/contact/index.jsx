import { userData } from "@/data/user-data";
import SectionTitle from "../helper/section-title";
import { BsSendFill } from "react-icons/bs";
import Button from "../ui/button";


function ContactMe() {
  const email = userData.email;

  async function handleSubmit(formData) {
    "use server";
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    console.log({ name, email, message });
  };
  return (
    <div id="ContactMe" className="border-t my-12 lg:my-24 border-[#25213b]">
      <SectionTitle title="Contact Me" />

      <div className="w-full flex justify-center py-12">
        <form action={handleSubmit} className="w-full max-w-xl p-8 rounded-lg shadow-md flex flex-wrap justify-between">
          <div className="mb-6 w-full md:w-[48%]">
            <label htmlFor="name" className="block text-gray-300 font-bold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="What's your good name?"
              className="w-full px-3 py-2 border rounded-md shadow-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
          </div>
          <div className="mb-6 w-full md:w-[48%]">
            <label htmlFor="email" className="block text-gray-300 font-bold mb-2">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="What's your web address?"
              className="w-full px-3 py-2 border rounded-md shadow-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
          </div>
          <div className="w-[100%]">
            <label htmlFor="message" className="block text-gray-300 font-bold mb-2">
              Your Message
            </label>
            <textarea
              type="message"
              id="message"
              name="message"
              placeholder="What you want to say?"
              className="w-full px-3 py-2 border rounded-md shadow-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            />
          </div>
          <div className="w-full justify-center flex items-center gap-3 mt-6">
            <Button
              title="Send">
              <BsSendFill size={16} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;