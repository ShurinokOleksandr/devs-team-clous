import {
	DrawerCloseButton,
	useDisclosure,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	Drawer,
	List,
	Flex,
	Box
} from '@chakra-ui/react';
import { NavLinks } from 'src/entities/NavLinks';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRef } from 'react';


export function DrawerLinks() {
	const { onClose, onOpen, isOpen } = useDisclosure()
	const btnRef =  useRef<HTMLButtonElement | null>(null)

	return (
		<Box >
			<HamburgerIcon
				display={{base:'block',xl:"none"}}
				_hover={{bg:'blue'}}
				cursor="pointer"
				onClick={onOpen}
				rounded="full"
				color="white"
				ref={btnRef}
				as="button"
				h={10}
				w={10}
				p={2}
			/>
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
				</DrawerContent>
			</Drawer>
		</Box>
	)
}
