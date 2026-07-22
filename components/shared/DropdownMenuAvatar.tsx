import {
    BadgeCheck,
    Bell,
    CircleHelp,
    CreditCard,
    Heart,
    LogOut,
    Settings,
    User,
} from "lucide-react";

import {
    Avatar,
    AvatarImage,
} from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserInterface } from "@/types/user";
import { logout } from "@/service/logout";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export function DropdownMenuAvatar({ user }: { user: UserInterface }) {

    const handleLogout = async () => {
        await logout();
        toast.success("User Logout successfully...")
        redirect('/login');
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full">
                <Avatar className="h-10 w-10 border">
                    <AvatarImage
                        src={user.profile?.profilePhoto}
                        alt={user.name}
                    />
                </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="w-64 rounded-xl"
            >
                {/* Wrap the profile label in a Group */}
                <DropdownMenuGroup>
                    <DropdownMenuLabel className="pb-2">
                        <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={user.profile?.profilePhoto} alt={user.name} /> :
                            </Avatar>

                            <div className="flex flex-col">
                                <span className="font-medium">
                                    {
                                        user.name
                                    }
                                </span>

                                <span className="text-xs text-muted-foreground">
                                    {
                                        user.email
                                    }
                                </span>
                            </div>
                        </div>
                    </DropdownMenuLabel>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        My Profile
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <BadgeCheck className="mr-2 h-4 w-4" />
                        Account
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <Bell className="mr-2 h-4 w-4" />
                        Notifications
                    </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Heart className="mr-2 h-4 w-4" />
                        Favorites
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <CreditCard className="mr-2 h-4 w-4" />
                        Billing
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <CircleHelp className="mr-2 h-4 w-4" />
                        Help & Support
                    </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={handleLogout} className="text-red-500 focus:text-red-500">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}