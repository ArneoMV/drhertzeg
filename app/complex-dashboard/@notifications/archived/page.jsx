import Card from '@/app/components/card/page'
import Link from "next/link"

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  )
}

