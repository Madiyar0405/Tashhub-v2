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
  SidebarMenuItem
} from '@/components/ui/sidebar'
import { Calendar, Home, Inbox } from 'lucide-react'
import { NavUser } from './nav-user'

const items = [
  {
    title: 'Home',
    url: '#',
    icon: Home
  },
  {
    title: 'Companies',
    url: '/companies',
    icon: Inbox
  },
  {
    title: 'Leaderboards',
    url: '#',
    icon: Calendar
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{name: "Madiarys", email: "madiarysmaximus@gmail.com", avatar: "https://ui.shadcn.com/avatars/shadcn.jpg"}} />
      </SidebarFooter>
    </Sidebar>
  )
}
