import { Box, Table, Tr, Th, Td,  AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Center, TableCaption, TableContainer, Tbody, Tfoot, Thead, useDisclosure } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import {checkout, removeFromCart} from "../Context/action";


const Cart = () => {
    const {state, dispatch} = useContext(CartContext);
    const {isOpen, onOpen, onClose} = useDisclosure();
    const cancleRef = React.useRef();
  
    const handleCheckout = ()=>{
      dispatch(checkout());
      onClose();
      alert("Order Placed");
    }
  
    return (
      <Box w={'60%'} m='auto' mb={5}>
        <TableContainer mt={{base: 20, sm: 20, md: 28, lg: 25}}>
          <Table
            variant="simple"
            colorScheme="gray"
            size={{base: "sm", sm:'sm',md:'md',lg:'lg'}}
          >
            <TableCaption>No Exchange | No Refunds</TableCaption>
            <Thead>
              <Tr>
                <Th fontSize={{base:'xs', md:'md'}}>
                  Products
                </Th>
                <Th fontSize={{base:'xs', md:'md'}}>
                  Price
                </Th>
                <Th fontSize={{base:'xs', md:'md'}}>
                  Remove From Cart
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {state.map((cartItem) => (
                <Tr key={cartItem.id}>
                  <Td fontSize={{base:'xs', md:'md'}}>
                    {cartItem.title}
                  </Td>
                  <Td fontSize={{base:'xs', md:'md'}}>
                    {cartItem.price}
                  </Td>
                  <Td fontSize={{base:'xs', md:'md'}}>
                    <Button onClick={()=>dispatch(removeFromCart(cartItem.id))}>
                      Remove From Cart
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th fontSize={{base:'xs', md:'md'}}>
                  Final Price
                </Th>
                <Th fontSize={{base:'xs', md:'md'}}>
                  {Math.round(state.reduce((a,c) => a+c.price,0))}
                </Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
        <Center mt={{base: 4, md:8}}>
          <Button variant="outline" colorScheme="teal" onClick={onOpen}>
            Place Order
          </Button>
  
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancleRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Place Order
                </AlertDialogHeader>
  
                <AlertDialogBody>
                  Are you sure you want to place this order?
                </AlertDialogBody>
  
                <AlertDialogFooter>
                  <Button ref={cancleRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="red" onClick={handleCheckout} ml={3}>
                    Yes
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Center>
      </Box>
    );
  };
  
  export default Cart;
  