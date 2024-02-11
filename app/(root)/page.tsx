import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5  md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 lg:px-20 justify-center items-center mx-auto">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Your Events, Our Plateform
            </h1>
            <p className="p-regular-16 md:p-regular-20 text-gray-500">
              Book and learn tips from 100+ mentors from world class companies
              and our beautiful community
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            width={400}
            height={400}
            alt="hero image"
            className="text-center items-center mx-auto"
          />
        </div>
      </section>

      <section
        id="events"
        className="sm:px-20 px-6 warpper my-10 flex flex-col gap-10"
      >
        <h2 className="h2-bold">
          Trusted by <br />
          <span>Thousand of events</span>
        </h2>

        <div className="flex flex-col md:flex-row w-full">
          <h2>Search</h2> <h2>Category</h2>
        </div>
      </section>
    </>
  );
}
