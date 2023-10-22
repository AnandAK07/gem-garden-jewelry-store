import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

let tempCartItems = [
  {
    id: 1, //product ID
    title: "Splendid Filigree Work Gold Bangle",
    weight: "10.809 g",
    size: "45 * 55 MM",
    quantity: 1,
    discountedPrice: "77080",
    mrp: "78548",
    image: ""
  },
  {
    id: 2,
    title: "Traditional Fancy Graceful Gold Drop Earrings",
    weight: "3.827 g",
    size: "",
    quantity: 1,
    discountedPrice: "27698",
    mrp: "27698",
    image: ""
  }
]

class Cart {
  constructor(cart) {
    if (Array.isArray(cart)) {
      this.cart = cart;
      this.appliedPromoCodes = {};
      this.availableCouponCodes = [
        {
          code: "welcome500",
          dsc: "500",
        },
      ]
    } else {
      throw new Error("Cart must be an array!");
    }
  }
  get totalItems() {
    return this.cart.reduce((acc, curr) => acc + curr.quantity, 0);
  }
  get totalPrice() {
    return this.cart.reduce((acc, curr) => acc + (+curr.discountedPrice * curr.quantity), 0);
  }
  get totalMrp() {
    return this.cart.reduce((acc, curr) => acc + (+curr.mrp * curr.quantity), 0);
  }
  add(cartItem) {
    try {
      let keys = Object.keys(cartItem);
      if (keys.includes("id") && keys.includes("title") && keys.includes("weight") && keys.includes("size") && keys.includes("quantity") && keys.includes("discountedPrice") && keys.includes("mrp") && keys.includes("image")) {
        this.cart.push(cartItem);
      } else {
        throw new Error()
      }
    } catch (err) {
      throw new Error("Cart Item should be of type object and should contain all of these properties ['id', 'title', 'weight', 'quantity', 'discountedPrice', 'mrp', 'image']!");
    }
  }
  remove(id) {
    try {
      let filteredCartItems = this.cart.filter(c => c.id === id);
      if (filteredCartItems.length > 0) {
        this.cart = this.cart.filter(c => c.id !== id);
      } else {
        throw new Error();
      }
    } catch (err) {
      throw new Error("No item in the cart exists with this id.");
    }
  }
  applyPromoCode(code) {
    if (code.dsc && code.code){
      let p = this.availableCouponCodes.filter(o => o.code === code.code && o.dsc === code.dsc);
      if (p.length > 0){
        this.appliedPromoCodes = code;
      }
    }
  }
}

const initialState = {
  cart: new Cart(tempCartItems),
  cartTotalItems: null,
  isAuth: false,
  token: "",
  loading: false,
  error: null,
  success: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        token: "",
        isAuth: false,
        loading: false,
        error: null,
        success: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        token: payload,
        isAuth: true,
        loading: false,
        error: null,
        success: true,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        token: "",
        isAuth: false,
        loading: false,
        error: payload,
        success: false,
      };
    }
    default:
      return state;
  }
};
