import { Button, Card, Col, Empty, Row, Typography } from "antd"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toggleFavorite } from "../store/favoritesSlice"

const { Title, Text } = Typography

function FavoritePage() {
  const items = useSelector((state) => state.favorites.items)
  const dispatch = useDispatch()

  return (
    <div style={{ maxWidth: 1100, margin: "30px auto 60px", padding: "0 16px" }}>
      <Title level={1}>Избранное</Title>
      {items.length === 0 ? (
        <Empty description="В избранном пока нет товаров" />
      ) : (
        <Row gutter={[16, 16]}>
          {items.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                cover={
                  <Link to={`/products/${product.id}`}>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      style={{ width: "100%", height: 190, padding: 15, objectFit: "contain" }}
                    />
                  </Link>
                }
                actions={[
                  <Button key="remove" type="text" onClick={() => dispatch(toggleFavorite(product))}>
                    Удалить из избранного
                  </Button>,
                ]}
              >
                <Link to={`/products/${product.id}`} style={{ color: "inherit" }}>
                  <Title level={5} ellipsis={{ rows: 2 }}>{product.title}</Title>
                  <Text strong>${product.price.toFixed(2)}</Text>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}

export default FavoritePage
