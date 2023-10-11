import React, {useState, useEffect} from 'react';
import Icon_Entypo from 'react-native-vector-icons/Entypo';
import Icon_Feather from 'react-native-vector-icons/Feather';
import Icon_AntDesign from 'react-native-vector-icons/AntDesign';
import 'react-native-gesture-handler';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Button,
} from 'react-native';
import styles from 'KioskCatch/src/style/LR_Kiosk/LR_Kiosk_Explore';

export default OrderList = props => {
  const [currentPage, setCurrentPage] = useState(0);
  const [dynamicPage, setDynamicPage] = useState(false);

  // Render the selected menu items
  const renderSelectedItems = () => {
    const selectedItems = Array.from(props.cartItems.values());
    const startIndex = currentPage * 3;
    const endIndex = startIndex + 3;

    const itemsToRender = selectedItems.slice(startIndex, endIndex);

    const handleDelete = itemName => {
      const updatedCartItems = new Map(props.cartItems);
      updatedCartItems.delete(itemName);
      props.setCartItems(updatedCartItems);
    };

    const renderedItems = itemsToRender.map((item, index) => (
      <View style={styles.orderInfo} key={index}>
        <OrderListContainer
          menu={item}
          handleDelete={() => handleDelete(item.name)}
        />
      </View>
    ));

    // Fill remaining spots with empty View tags
    const emptySpots = 3 - itemsToRender.length;
    for (let i = 0; i < emptySpots; i++) {
      renderedItems.push(<View style={styles.orderInfo} key={`empty-${i}`} />);
    }

    return renderedItems;
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const selectedItems = Array.from(props.cartItems.values());
    const totalPages = Math.ceil(selectedItems.length / 3);

    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    if (props.cartItems.size % 3 === 1) {
      setDynamicPage(true);
    } else {
      setDynamicPage(false);
    }
  }, [props.cartItems]);

  useEffect(() => {
    if (
      dynamicPage &&
      currentPage <
        Math.ceil(Array.from(props.cartItems.values()).length / 3) - 1
    ) {
      setCurrentPage(currentPage + 1);
    }
  }, [dynamicPage]);

  return (
    <View style={styles.orderContents}>
      <View style={styles.orderList}>{renderSelectedItems()}</View>
      <OrderListIcon
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        currentPage={currentPage}
        totalPages={Math.ceil(Array.from(props.cartItems.values()).length / 3)}
      />
    </View>
  );
};

const OrderListContainer = ({menu, handleDelete}) => {
  const truncatedName =
    menu.name.length > 5 ? menu.name.substring(0, 4) + '...' : menu.name;

  return (
    <>
      <Text style={styles.order_text}>{truncatedName}</Text>
      <View style={styles.order_option}>
        <Text style={styles.order_text}>{menu.quantity}</Text>
        <TouchableOpacity style={styles.orderBtn}>
          <Icon_Entypo
            name="select-arrows"
            size={20}
            style={styles.order_icon}
          />
          <Text style={styles.order_text}>수량</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.order_option}>
        <Text style={styles.order_text}>{menu.price * menu.quantity}</Text>
        <TouchableOpacity style={styles.orderBtn}>
          <Icon_Feather name="plus" size={20} style={styles.order_icon} />
          <Text style={styles.order_text}>옵션</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.orderBtn2} onPress={handleDelete}>
          <Icon_Feather name="x" size={20} style={styles.order_icon} />
          <Text style={styles.order_text}>삭제</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const OrderListIcon = ({
  handlePreviousPage,
  handleNextPage,
  currentPage,
  totalPages,
}) => {
  return (
    <View style={styles.orderList_icon}>
      <TouchableOpacity onPress={handlePreviousPage}>
        <Icon_AntDesign
          name="up-square-o"
          size={35}
          style={{color: currentPage === 0 ? '#B8B8B8' : 'black'}}
        />
      </TouchableOpacity>
      <Text style={styles.currentPageText}>{currentPage + 1}</Text>
      <TouchableOpacity onPress={handleNextPage}>
        <Icon_AntDesign
          name="down-square-o"
          size={35}
          style={{color: currentPage === totalPages - 1 ? '#B8B8B8' : 'black'}}
        />
      </TouchableOpacity>
    </View>
  );
};
