import ContactForm from '../components/ContactForm'
import ContactSocials from '../components/ContactSocials'

export default function page() {
    return (
        <div className="m-4 flex flex-col gap-y-4 bg-neutral-950">
            <div className="mt-16 py-8 rounded-lg flex flex-col items-center bg-neutral-900 sm:py-14">
                <h2 className="text-sm/none text-orange-500">Contact</h2>
                <h3 className="mt-4 text-4xl/none text-neutral-300 font-semibold sm:text-5xl/none">Let&apos;s Work</h3>
            </div>
            <div className="px-4 py-6 rounded-lg flex flex-col bg-neutral-900 sm:flex-row sm:justify-center sm:gap-x-6 sm:py-20">
                <div className="pl-2 flex sm:order-2 justify-center sm:pl-0 sm:flex-none">
                    <ContactSocials className="sm:flex-col sm:gap-y-3 sm:mt-2" />
                </div>
                <div className="mt-6 w-full max-w-xl sm:mt-0 sm:order-1">
                    <ContactForm />
                </div>
            </div>
        </div> 
    )
}
