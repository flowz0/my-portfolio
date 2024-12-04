import Footer from "./Footer";
import Divider from "./Divider";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <div>
            <div className="pt-16 flex flex-col items-center justify-center bg-neutral-900">
                <div className="mx-4 py-4 w-full flex flex-col items-center">
                    <h2 className="text-sm/none font-light mt-6 text-orange-500">Contact</h2>
                    <h3 className="text-4xl/none font-semibold mt-3.5 sm:text-5xl">Let's Work</h3>
                </div>
                <ContactForm />
            </div>
            <Divider className="w-full" />
            <Footer />
        </div>
    );
}
