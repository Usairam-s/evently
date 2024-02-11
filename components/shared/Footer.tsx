import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t ">
      <div className="flex flex-center flex-col p-4 gap-2 wrapped sm:justify-between sm:px-20 sm:flex-row">
        <Link href="/">
          <Image
            width={128}
            height={38}
            alt="logo"
            src="/assets/images/logo.svg"
          />
        </Link>

        <p className="text-gray-600">© 2024 Evently All right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
