import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Contact</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Collaborations & commissions</h1>
        <p className="text-neutral-400 max-w-2xl leading-relaxed">
          For live visuals, installations, or technical direction inquiries, send a note below. I respond within two business
          days.
        </p>
      </div>

      <form
        action="https://formspree.io/f/XXXXXXXX"
        method="POST"
        className="space-y-4 max-w-md"
      >
        <label className="flex flex-col gap-2 text-sm text-neutral-200">
          Name
          <input
            type="text"
            name="name"
            required
            className="bg-black border border-neutral-700 rounded-md px-3 py-2 focus:border-neutral-200 focus:outline-none transition-colors"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-neutral-200">
          Email
          <input
            type="email"
            name="_replyto"
            required
            className="bg-black border border-neutral-700 rounded-md px-3 py-2 focus:border-neutral-200 focus:outline-none transition-colors"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-neutral-200">
          Project outline
          <textarea
            name="message"
            rows={5}
            required
            className="bg-black border border-neutral-700 rounded-md px-3 py-2 focus:border-neutral-200 focus:outline-none transition-colors"
          />
        </label>
        <button
          type="submit"
          className="border border-neutral-100 text-neutral-900 bg-neutral-100 hover:bg-white px-4 py-2 rounded-md uppercase text-xs tracking-[0.16em] transition-transform hover:-translate-y-0.5"
        >
          Send
        </button>
      </form>

      <div className="text-sm text-neutral-400 space-y-1">
        <p>Email: <a href="mailto:bojunzhangsus@gmail.com" className="underline">bojunzhangsus@gmail.com</a></p>
        <p>Instagram: <a href="https://instagram.com/bojundesign" className="underline" target="_blank" rel="noreferrer">@bojundesign</a></p>
      </div>
    </motion.div>
  );
};

export default Contact;
