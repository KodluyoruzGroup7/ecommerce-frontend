import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { HoverDropdown } from './Dropdown/Dropdown';
import './navbar.css';
import WishListContext from '../../contexts/WishlistContext';
import CartContext from '../../contexts/CartContext';
import { Menu, Dropdown } from 'antd';
import {
  ShopOutlined,
  SearchOutlined,
  HeartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';

function Navbar() {
  const [selectedMenu, setSelectedMenu] = useState('');
  const { cartItems } = useContext(CartContext);
  const { wishlist } = useContext(WishListContext);

  const menuClickHandler = (e) => {
    setSelectedMenu(e.key);
  };

  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to='/'>
          <ShopOutlined />
          TRENDBOO
        </Link>
      </div>
      <Menu
        onClick={menuClickHandler}
        selectedKeys={[selectedMenu]}
        mode='horizontal'
      >
        <Menu.Item key='women'>
          <Link
            to={{
              pathname: '/products',
              search: '?category=Women',
            }}
          >
            Women
          </Link>
        </Menu.Item>

        <Menu.Item key='men'>
          <Link
            to={{
              pathname: '/products',
              search: '?category=Men',
            }}
          >
            Men
          </Link>
        </Menu.Item>

        <Menu.Item key='shoes'>
          <Link
            to={{
              pathname: '/products',
              search: '?category=Shoes',
            }}
          >
            Shoes
          </Link>
        </Menu.Item>

        <Menu.Item key='accessories'>
          <Link
            to={{
              pathname: '/products',
              search: '?category=Accessories',
            }}
          >
            Accessories
          </Link>
        </Menu.Item>
      </Menu>

      <div className='menu-right'>
        <Link to='#'>
          <SearchOutlined />
        </Link>

        <Dropdown overlay={HoverDropdown} onClick={(e) => e.preventDefault()}>
          <Link to='#'>
            <UserOutlined />
          </Link>
        </Dropdown>
        <Link to='/wishlist'>
          <div className={`count ${!wishlist.length && 'hide'}`}>
            {wishlist.length}
          </div>
          <HeartOutlined />
        </Link>
        <Link to='/cart'>
          <div className={`count ${!cartItems.length && 'hide'}`}>
            {cartItems.length}
          </div>
          <ShoppingOutlined />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
