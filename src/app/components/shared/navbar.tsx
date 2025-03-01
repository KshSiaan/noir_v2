"use client";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data/navData";
import { EyeClosedIcon, EyeIcon, PhoneIcon, VideoIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <motion.nav
        initial={{ width: "48px" }}
        animate={{ width: menuOpen ? "100%" : "48px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`h-[48px] absolute top-0 right-0 bg-background rounded-xl flex flex-row ${
          menuOpen ? "justify-end" : "justify-center"
        } items-center !px-2`}
      >
        {menuOpen && (
          <div className="!pl-1 text-xl !font-['UnifrakturMaguntia']">Noir</div>
        )}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="w-full h-full flex flex-row justify-center items-center gap-6 font-bold text-sm"
          >
            {navLinks.map((item, i) => (
              <Link
                href={item.key}
                key={i}
                className="hover:border-b-4 transition-all"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
        <Button
          size="icon"
          variant="ghost"
          className="cursor-pointer relative"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <EyeIcon className="size-5" />
          ) : (
            <EyeClosedIcon className="size-5" />
          )}
        </Button>
        <Calls menuOpen={menuOpen} />
      </motion.nav>
    </>
  );
}

function Calls({ menuOpen }: { menuOpen: boolean }) {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, top: "0px" }}
          animate={{ opacity: 1, scale: 1, top: "54px" }}
          exit={{ opacity: 0, scale: 0.8, top: "0px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute !p-2 right-0 bg-background rounded-xl flex flex-col justify-center items-center gap-2"
        >
          <Button size="icon" variant="secondary" className="cursor-pointer">
            <PhoneIcon />
          </Button>
          <Button size="icon" variant="secondary" className="cursor-pointer">
            <VideoIcon />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
