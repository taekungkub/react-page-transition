import { Home, Inbox } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar";
import {
  pageSquareToBottom,
  pageSquareToCenter,
  pageSquareToLeft,
  pageSquareToRight,
  pageSquareToTop,
  pageVariantCircleBottomLeft,
  pageVariantCircleBottomRight,
  pageVariantCircleCenter,
  pageVariantCircleHesitate,
  pageVariantCircleTopLeft,
  pageVariantCircleTopRight,
  wipeCinematic,
  wipeInBottomLeft,
  wipeInBottomRight,
  wipeTopLeft,
  wipeTopRight,
} from "../const/variants";

interface Props {
  onChange: (varant: unknown) => void;
}

export function TheSidebar({ onChange }: Readonly<Props>) {
  // Menu items.
  const items = [
    {
      title: "CircleTopLeft",
      icon: Inbox,
      pageVariant: pageVariantCircleTopLeft,
    },
    {
      title: "CircleTopRight",
      icon: Inbox,
      pageVariant: pageVariantCircleTopRight,
    },
    {
      title: "CircleBottomLeft",
      icon: Inbox,
      pageVariant: pageVariantCircleBottomLeft,
    },
    {
      title: "CircleBottomRight",
      icon: Inbox,
      pageVariant: pageVariantCircleBottomRight,
    },

    {
      title: "CircleCenter",
      icon: Inbox,
      pageVariant: pageVariantCircleCenter,
    },
    {
      title: "CircleHesitate",
      icon: Inbox,
      pageVariant: pageVariantCircleHesitate,
    },
  ];

  const itemsSquare = [
    {
      title: "SquareToLeft",
      icon: Home,
      pageVariant: pageSquareToLeft,
    },
    {
      title: "SquareToRight",
      icon: Home,
      pageVariant: pageSquareToRight,
    },

    {
      title: "SquareToTop",
      icon: Home,
      pageVariant: pageSquareToTop,
    },
    {
      title: "SquareToBottom",
      icon: Home,
      pageVariant: pageSquareToBottom,
    },
    {
      title: "SquareToCenter",
      icon: Home,
      pageVariant: pageSquareToCenter,
    },
  ];

  const itemsWipe = [
    {
      title: "WipeBottomLeft",
      icon: Home,
      pageVariant: wipeInBottomLeft,
    },
    {
      title: "WipeBottomRight",
      icon: Home,
      pageVariant: wipeInBottomRight,
    },
    {
      title: "WipeTopRight",
      icon: Home,
      pageVariant: wipeTopRight,
    },
    {
      title: "WipeTopLeft",
      icon: Home,
      pageVariant: wipeTopLeft,
    },
    {
      title: "WipeCinematic",
      icon: Home,
      pageVariant: wipeCinematic,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-blue-400">
            Circles
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  onClick={() => onChange(item.pageVariant)}
                >
                  <SidebarMenuButton asChild>
                    <div>
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-blue-400">
            Square
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {itemsSquare.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  onClick={() => onChange(item.pageVariant)}
                >
                  <SidebarMenuButton asChild>
                    <div>
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-blue-400">Wipe</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {itemsWipe.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  onClick={() => onChange(item.pageVariant)}
                >
                  <SidebarMenuButton asChild>
                    <div>
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
