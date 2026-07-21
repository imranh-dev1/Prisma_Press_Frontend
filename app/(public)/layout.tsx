import { Navbar } from "@/components/shared/Navbar";
import { getMe } from "@/service/getMe";

export default async function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const user = await getMe();
    // console.log(user)

    return (
        < div className="" >
            <Navbar user={user} />
            {children}
        </div >
    );
}