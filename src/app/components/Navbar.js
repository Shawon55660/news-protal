
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


import Link from 'next/link';

const Navbar = async() => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    console.log(user)
  return (
    <nav className="  text-black bg-red-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
      <p className="text-lg font-semibold uppercase">Daily Update</p>
        <div>
            <ul className="flex font-semibold   gap-4">
          <li>
            <Link href="/">Home</Link>

          </li>
          {user?.email ? <li><Link href='/profile'>Profile</Link></li>:<li><LoginLink>Profile</LoginLink></li>}
          
         {user?.email ? <li><LogoutLink>logout</LogoutLink></li>: <li> <LoginLink>login</LoginLink></li>}
         
        </ul></div>
      </div>
    </nav>
  );
};

export default Navbar;
