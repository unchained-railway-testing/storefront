import { useMutation, gql } from "@apollo/client";
import { CART_CHECKOUT_QUERY } from "../../checkout/Checkout";

const UPDATE_CART_CONTACT_MUTATION = gql`
  mutation UpdateCartContact($contact: ContactInput) {
    updateCart(contact: $contact) {
      _id
      contact {
        emailAddress
        telNumber
      }
    }
  }
`;

const useUpdateCartContact = () => {
  const [updateCartContactMutation] = useMutation(
    UPDATE_CART_CONTACT_MUTATION,
    {
      refetchQueries: [{ query: CART_CHECKOUT_QUERY }],
      awaitRefetchQueries: true,
    },
  );

  const updateCartContact = async ({ contact }) => {
    await updateCartContactMutation({ variables: { contact } });
  };

  return {
    updateCartContact,
  };
};

export default useUpdateCartContact;
