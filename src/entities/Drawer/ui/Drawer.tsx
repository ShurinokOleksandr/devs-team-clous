import {
	DrawerCloseButton,
	useDisclosure,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerFooter,
	DrawerBody,
	Drawer,
	Button,
	List,
	Flex
} from "@chakra-ui/react";
import { NavLinks } from "src/entities/NavLinks";
import {HamburgerIcon} from '@chakra-ui/icons'
import {useRef} from "react";


export function DrawerLinks() {
	const { onClose, onOpen, isOpen } = useDisclosure()
	const btnRef =  useRef<HTMLButtonElement | null>(null)

	return (
		<>
			<HamburgerIcon display={['flex','flex','flex','none']} _hover={{bg:'gray'}}  onClick={onOpen} color="white"  ref={btnRef} as="button"  w={4} h={4} />
			<Drawer
				finalFocusRef={btnRef}
				onClose={onClose}
				placement='right'
				isOpen={isOpen}
			>
				<DrawerOverlay />
				<DrawerContent bgColor="black" color="white">
					<DrawerCloseButton />
					<DrawerHeader>Навігація</DrawerHeader>

					<DrawerBody  >
						<List bgColor="black"   marginX="auto"  width="full" >
							<Flex justify="space-between" direction='column' align='center' rowGap={5}>
								<NavLinks />
							</Flex>
						</List>
					</DrawerBody>

					<DrawerFooter>
						<Button onClick={onClose} variant='outline' mr={3}>
							Cancel
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}
