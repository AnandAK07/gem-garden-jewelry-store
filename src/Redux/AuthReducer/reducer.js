import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, APPLY_PROMO, REMOVE_PROMO, ADD_ADDRESS, EMPTY_CART } from "./actionType";

let tempCartItems = [
  {
    id: 1, //product ID
    title: "MAILLON PANTHÈRE WEDDING BAND",
    description: "Maillon Panthère wedding band, yellow gold (750/1000), set with 4 brilliant-cut diamonds totaling 0.05 carat. Width: 2.5 mm. Thickness: 2 mm (for size 52).",
    quantity: 1,
    discountedPrice: "170000",
    mrp: "200000",
    image: "https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dwe0b69169/images/large/87674e0fb3725583b2e5ccd9f6f9bef2.png?sw=2000&sh=2000&sm=fit&sfrm=png"
  },
  {
    id: 2,
    title: "BALLERINE WEDDING BAND",
    description: "Ballerine curved wedding band, width 2 mm, platinum 950/1000, set with 27 brilliant-cut diamonds totaling 0.09 carats (for size 52).",
    quantity: 1,
    discountedPrice: "234000",
    mrp: "300000",
    image: "https://www.cartier.com/dw/image/v2/BFHP_PRD/on/demandware.static/-/Sites-cartier-master/default/dw5e259833/images/large/563f9baac90b59d5851f8a6be11815a3.png?sw=2000&sh=2000&sm=fit&sfrm=png"
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
      ];
      this.promoDiscount = 0;
    } else {
      throw new Error("Cart must be an array!");
    }
  }
  get totalItems() {
    return this.cart.reduce((acc, curr) => acc + curr.quantity, 0);
  }
  get nonPromoDiscountAmount() {
    let nonPromoAmount =  this.cart.reduce((acc, curr) => acc + (+curr.discountedPrice * curr.quantity), 0);
    return nonPromoAmount;
  }
  get totalMrp() {
    return this.cart.reduce((acc, curr) => acc + (+curr.mrp * curr.quantity), 0);
  }
  get finalPriceForCustomer() {
    return this.nonPromoDiscountAmount - this.promoDiscount;
  }
  add(cartItem) {
    try {
      let keys = Object.keys(cartItem);
      if (keys.includes("id") && keys.includes("title") && keys.includes("description") && keys.includes("quantity") && keys.includes("discountedPrice") && keys.includes("mrp") && keys.includes("image")) {
        this.cart.push(cartItem);
      } else {
        throw new Error()
      }
    } catch (err) {
      throw new Error("Cart Item should be of type object and should contain all of these properties ['id', 'title', 'description', 'quantity', 'discountedPrice', 'mrp', 'image']!");
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
      this.promoDiscount = Number(code.dsc);
    }
  }
  removePromoCode() {
    this.appliedPromoCodes = {};
  }
}

const initialState = {
  cart: new Cart(tempCartItems),
  cartTotalItems: null,
  userData:{
    personal:{
      firstName:"",
      lastName:"",
      email:"",
      phone:"",
    },
    shippingAddress:{
      line1:"",
      line2:"",
      city:"",
      state:"",
      postalCode:"",

    }
  },
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
    case APPLY_PROMO: {
      let newCart = new Cart(state.cart.cart);
      newCart.applyPromoCode(payload);
      return {
        ...state,
        cart: newCart
      };
    }
    case REMOVE_PROMO: {
      let newCart = new Cart(state.cart.cart);
      newCart.removePromoCode();
      return {
        ...state,
        cart: newCart
      };
    }
    case ADD_ADDRESS: {
      return {
        ...state,
        userData: payload
      }
    }
    case EMPTY_CART: {
      return {
        ...state,
        cart: new Cart([])
      }
    }
    default:
      return state;
  }
};
