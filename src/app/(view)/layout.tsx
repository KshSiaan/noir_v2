import { Button } from "@/components/ui/button";
import Navbar from "../components/shared/navbar";
import { Input } from "@/components/ui/input";
import { Send, SmileIcon } from "lucide-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="h-dvh w-full flex flex-col justify-end items-center">
        <div className="flex flex-grow flex-col w-2/3 justify-end items-center">
          <div className="h-6"></div>

          <div className="bg-secondary flex-grow w-full rounded-xl !p-2 h-full flex flex-col overflow-hidden shadow-md">
            {/* Navbar Section */}
            <div className="h-[74px] relative">
              <div className="absolute left-0 top-0 font-bold !p-2 bg-secondary w-full">
                Chatting with User
              </div>
              <Navbar />
            </div>

            {/* Children Container */}
            <div className="flex-grow overflow-auto">{children}</div>
          </div>

          {/* Input and Button Section */}
          <div className="min-h-[94px] w-full">
            <div className="h-full w-full flex flex-row justify-center items-center gap-2">
              <Button variant="ghost" className="size-9 cursor-pointer">
                <SmileIcon className="size-6" />
              </Button>
              <Input className="border outline-0 outline-none !py-2 !px-4 rounded-full" />
              <Button className="!px-5 cursor-pointer rounded-full">
                Send <Send />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
