import ROUTE_URL from '../../router/urlRouter'
import { IMG_LOGO } from '../../assets'
import { Link as LinkRouter, NavLink } from 'react-router-dom'
import {
    AiOutlineMenu,
    AiOutlineClose,
    AiOutlineRight,
} from 'react-icons/ai'
import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
    Image,
    Container,
} from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box
            position='fixed'
            top='0'
            left='0'
            right='0'
            bg='#FFF'
            boxShadow='md'
            zIndex='999'
        >
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                height={'67px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
            >
                <Container as={Flex} maxWidth='container.xl'>
                    <Flex flex={{ base: 1 }}>
                        <Link
                            as={LinkRouter}
                            to={ROUTE_URL.HOME}
                        >
                            <Image src={`${process.env.REACT_APP_API_BASE_URL}/assets/images/logo.png?v=${new Date().getTime()}`} height='51px' />
                        </Link>

                        <Flex display={{ base: 'none', md: 'flex' }} ml={{ base: 'unset', md: 'auto' }}>
                            <DesktopNav />
                        </Flex>
                    </Flex>
                    <Flex
                        flex={{ base: 1, md: 'auto' }}
                        ml={{ base: -2 }}
                        display={{ base: 'flex', md: 'none' }}
                        alignItems='center'
                    >
                        <IconButton
                            onClick={onToggle}
                            icon={
                                isOpen ? <Icon as={AiOutlineClose} w={5} h={5} /> : <Icon as={AiOutlineMenu} w={5} h={5} />
                            }
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                            marginLeft='auto'
                        />
                    </Flex>
                </Container>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    )
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.800', 'white')
    const popoverContentBgColor = useColorModeValue('white', 'gray.800')

    return (
        <Stack direction={'row'} spacing={4} alignItems='center'>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                as={NavLink}
                                to={navItem.href ?? '#'}
                                p={2}
                                fontSize={'14px'}
                                fontWeight='semibold'
                                color={linkColor}
                                _activeLink={{
                                    color: navItem.href ? 'primary.60' : 'unset'
                                }}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}
                                display='flex'
                                alignItems='center'
                                gap='.5rem'
                            >
                                {navItem.label}
                                {navItem.label === 'Perusahaan' && (
                                    <Icon
                                        as={FaChevronDown}
                                    />
                                )}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}
                                borderWidth='1px'
                                borderColor='gray.200'
                            >
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
        <Link
            as={NavLink}
            to={href ?? '#'}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: 'primary.95' }}
            _activeLink={{
                color: 'primary'
            }}
        >
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'primary.50' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'primary.50'} w={5} h={5} as={AiOutlineRight} />
                </Flex>
            </Stack>
        </Link>
    )
}

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                px={5}
                as={NavLink}
                to={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _activeLink={{
                    color: 'primary'
                }}
                _hover={{
                    textDecoration: 'none',
                }}
            >
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={FaChevronDown}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        color='gray.600'
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    pl={12}
                    align={'start'}
                    marginBottom='10px'
                >
                    {children &&
                        children.map((child) => (
                            <Link
                                as={NavLink}
                                key={child.label}
                                py={2}
                                to={child.href || ''}
                                _activeLink={{
                                    color: 'primary'
                                }}
                            >
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    )
}

interface NavItem {
    label: string
    subLabel?: string
    children?: Array<NavItem>
    href?: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Beranda',
        href: ROUTE_URL.HOME,
    },
    {
        label: 'Perusahaan',
        children: [
            {
                label: 'Tentang Kami',
                href: ROUTE_URL.ABOUT,
            },
            {
                label: 'Cabang',
                href: ROUTE_URL.DISTRIBUTOR,
            },
            {
                label: 'Produk',
                href: ROUTE_URL.PRODUCT,
            },
        ]
    },
    {
        label: 'Artikel',
        href: ROUTE_URL.ARTICLE,
    },
    {
        label: 'Galeri',
        href: ROUTE_URL.GALLERY,
    },
    {
        label: 'Album',
        href: ROUTE_URL.ALBUM,
    },
]