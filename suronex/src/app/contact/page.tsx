import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Book a demo"
        description="Tell us about your AI estate and we'll show you what Suronex finds."
      />
      <section className="mx-auto max-w-2xl px-5 pb-28 sm:px-8">
        <ContactForm />
      </section>
    </>
  );
}
