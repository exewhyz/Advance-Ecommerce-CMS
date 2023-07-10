import Navbar from "@/components/navbar";
import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
    <>
        <Navbar />
        <div className="flex justify-center items-center w-full">
            <UserProfile />
        </div>
    </>
);

export default UserProfilePage;