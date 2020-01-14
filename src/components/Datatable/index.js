import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { Link } from 'react-router-dom';
// import {
//   MdRemoveCircleOutline,
//   MdAddCircleOutline,
//   MdDelete,
//   MdRemoveShoppingCart,
// } from 'react-icons/md';

// import { formatPrice } from '../../util/format';

// import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total, EmptyCart } from './styles';
export const Datatable = props => (
// function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
//   function increment(product) {
//     updateAmountRequest(product.id, product.amount + 1);
//   }

//   function decrement(product) {
//     updateAmountRequest(product.id, product.amount - 1);
//   }

//   if (!cart.length) {
//     return (
//       <Container>
//         <EmptyCart>
//           {/* <MdRemoveShoppingCart size={140} /> */}
//           <h2>SHOPPING CART IS EMPTY</h2>
//           <p>You have no products in your shopping cart.</p>
//           <Link to="/">
//             <button type="button">Continue shopping</button>
//           </Link>
//         </EmptyCart>
//       </Container>
//     );
//   }

//   return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Interest</th>
            <th>Audience</th>
            <th>Path</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {props.interests.map(interest => (
            <tr>
              <td>
                <strong></strong>
                {/* <span>{product.priceFormatted}</span> */}
              </td>
              <td>
                <strong>{interest.name}</strong>
                {/* <span>{product.priceFormatted}</span> */}
              </td>
              <td>
                <strong>{interest.audience_size}</strong>
              </td>
              <td>
                <strong>{interest.path}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      {/* <footer>
        <button type="button">PROCEED TO CHECKOUT</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer> */}
    </Container>
//   );
)

// const mapStateToProps = state => ({
//   cart: state.cart.products.map(product => ({
//     ...product,
//     subtotal: formatPrice(product.price * product.amount),
//   })),
//   total: formatPrice(
//     state.cart.products.reduce((total, product) => {
//       return total + product.price * product.amount;
//     }, 0)
//   ),
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(CartActions, dispatch);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Cart);