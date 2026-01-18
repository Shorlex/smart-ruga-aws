"use client";
import Link from "next/link";
import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Image from "next/image";
import SocialLogin from "./SocialLogin";

const Authentication = () => {
  const [auth, setAuth] = useState(true);

  return (
    <section className="h-full flex items-center justify-center">
      <div className="w-full lg:px-24 px-5">
        <div className="flex flex-col items-center gap-3 mb-10">
          <Image
            src={"/images/Smart-Ruga-Logo.png"}
            width={250}
            height={70}
            alt="main-logo"
          />
          <h1 className="text-4xl font-bold text-center">Welcome to Smart-Ruga</h1>
        </div>
        {auth ? <Register /> : <Login />}
        <div className="mt-5">
          <SocialLogin />
        </div>
        <p className="mt-5 text-center">
          {auth ? "Already have an account?" : "Don’t have an account?"}{" "}
          <Link
            className="text-[#94D838]"
            href={"#"}
            onClick={() => setAuth(!auth)}
          >
            {auth ? "Login" : "Register"}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Authentication;
