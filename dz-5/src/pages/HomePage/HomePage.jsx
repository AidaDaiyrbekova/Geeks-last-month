import { Typography } from "antd";
import { Page } from "../../shared/ui/page/Page"

export function HomePage() {
  return (
    <Page>
      <Typography.Title level={3}>Welcome !!!</Typography.Title>
    <Typography.Paragraph>
      Это стартовый каркас маркетплейсаю Дальше подключим реальный бэк, CRUD, корзину и категории.
    </Typography.Paragraph>
    </Page>
  )
}