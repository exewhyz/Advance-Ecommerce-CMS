import { UserButton, auth } from "@clerk/nextjs";
import { dark } from '@clerk/themes';
import { redirect } from "next/navigation";

import StoreSwitcher from "@/components/store-switcher";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import prismadb from "@/lib/prismadb";
import { UserNav } from "@/components/user-nav";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    }
  });

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
        <div className="ml-auto lg:flex items-center space-x-4 hidden ">
          <ThemeToggle />
          <UserButton afterSignOutUrl="/"
            // showName
            // appearance={{ baseTheme: dark }}
          />
        </div>
        <div className="ml-auto flex lg:hidden items-center space-x-2">
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
