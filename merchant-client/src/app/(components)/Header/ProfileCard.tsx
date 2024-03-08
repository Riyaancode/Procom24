import { Typography } from "@/components/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { UserProfile } from "@auth0/nextjs-auth0/client";
import { useCookies } from "next-client-cookies";
import Link from "next/link";
import { type FC, forwardRef } from "react";

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

interface IProfileCard {
  user: UserProfile;
}

export const ProfileCard: FC<IProfileCard> = ({ user }) => {

  const cookieStore = useCookies();
  const handleLogout = () => {
    localStorage.removeItem("userData");
    cookieStore.set('auth-token', '', { expires: new Date(0) });
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="px-0">
            <div className="flex-center gap-x-4">
              <Avatar className="size-12">
                <AvatarImage src={user.picture!} />
                <AvatarFallback>{user.name}</AvatarFallback>
              </Avatar>
              <div className="hidden text-start leading-tight md:block">
                <Typography className="text-sm font-semibold" block>
                  {user.name}
                </Typography>
                <Typography className="text-xs font-normal" block>
                  {user.email}
                </Typography>
              </div>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-36 text-center">
              <ListItem title="Profile" className="px-6" href="/" />
              <ListItem title="Setting" className="px-6" href="/" />
              <Link onClick={handleLogout} href="">
                <ListItem title="Logout" className="px-6" href="/" />
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
