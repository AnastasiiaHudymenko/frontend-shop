import { Wrap, List, Item } from './OrderList.styled';

export const OrderList = () => {
  return (
    <Wrap>
      <List>
        <Item>
          <img alt="" />
          <p>Image</p>
          <div>
            <p>title</p>
            <p>price</p>
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
        </Item>
        <Item>
          <img alt="" />
          <p>Image</p>
          <div>
            <p>title</p>
            <p>price</p>
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
        </Item>
        <Item>
          <img alt="" />
          <p>Image</p>
          <div>
            <p>title</p>
            <p>price</p>
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
        </Item>
      </List>
    </Wrap>
  );
};
