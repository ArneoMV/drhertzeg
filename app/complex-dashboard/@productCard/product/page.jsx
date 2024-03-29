import Card from '@/app/components/card/page'
import Link from "next/link"

export default function ProductCardPage() {
  return (
    <Card>
      <div>Opis čaja koji je kliknut</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  )
}

