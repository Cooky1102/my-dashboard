import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils.ts";

export function RecentSales() {
  return (
    <div className="space-y-8">
      {data.map((item) => (
        <div key={item.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={item.avatar} alt="Avatar" />
            <AvatarFallback>{getInitials(item.name)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 mr-4 space-y-1 overflow-hidden">
            <p className="text-sm font-medium leading-none">{item.name}</p>
            <p className="text-sm text-muted-foreground truncate">{item.email}</p>
          </div>
          <div className="ml-auto font-medium shrink-0">
            +${new Intl.NumberFormat().format(item.amount)}
          </div>
        </div>
      ))}
    </div>
  );
}

const data = [
  {
    id: 1,
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: 1999,
    avatar: "https://picsum.photos/id/1/20/20",
  },
  {
    id: 2,
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: 39,
    avatar: "https://picsum.photos/id/10/20/20",
  },
  {
    id: 3,
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: 299,
    avatar: "https://picsum.photos/id/20/20/20",
  },
  {
    id: 4,
    name: "William Kim",
    email: "will@email.com",
    amount: 99,
    avatar: "https://picsum.photos/id/30/20/20",
  },
  {
    id: 5,
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: 39,
    avatar: "https://picsum.photos/id/40/20/20",
  },
];
