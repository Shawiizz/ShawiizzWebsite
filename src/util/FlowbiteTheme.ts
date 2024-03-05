import { CustomFlowbiteTheme } from 'flowbite-react'

export const flowbiteTheme: CustomFlowbiteTheme = {
    pagination: {
        'base': '',
        'layout': {
            'table': {
                'base': 'text-sm text-gray-700',
                'span': 'font-semibold text-gray-900'
            }
        },
        'pages': {
            'base': 'xs:mt-0 mt-2 inline-flex items-center -space-x-px',
            'showIcon': 'inline-flex',
            'previous': {
                'base': 'prevButton ml-0 rounded-l-lg border dark:border-white bg-transparent py-2 px-3 leading-tight dark:text-white text-gray-800',
                'icon': 'h-5 w-5'
            },
            'next': {
                'base': 'nextButton rounded-r-lg border dark:border-white bg-transparent py-2 px-3 leading-tight dark:text-white text-gray-800',
                'icon': 'h-5 w-5'
            },
            'selector': {
                'base': 'w-12 border dark:border-gray-300 bg-transparent py-2 leading-tight text-white hover:bg-cyan-100 hover:text-cyan-700',
                'active': 'bg-gray-200 text-blue-600',
                'disabled': 'opacity-50 cursor-normal'
            }
        }
    },
    card: {
        'root': {
            'base': 'flex rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 h-fit',
            'children': 'flex flex-col gap-4 p-6',
            'horizontal': {
                'off': 'flex-col',
                'on': 'flex-col md:max-w-xl md:flex-row'
            },
            'href': 'hover:bg-gray-100 dark:hover:bg-gray-800'
        },
        'img': {
            'base': '',
            'horizontal': {
                'off': 'rounded-t-lg',
                'on': 'h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
            }
        }
    },
    accordion: {
        'root': {
            'base': 'divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700',
            'flush': {
                'off': 'rounded-lg border',
                'on': 'border-b'
            }
        },
        'content': {
            'base': 'py-5 px-5 last:rounded-b-lg first:rounded-t-lg'
        },
        'title': {
            'arrow': {
                'base': 'ml-6 h-6 w-6 shrink-0',
                'open': {
                    'off': '',
                    'on': 'rotate-180'
                }
            },
            'base': 'flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400',
            'flush': {
                'off': 'hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800',
                'on': 'bg-transparent dark:bg-transparent'
            },
            'heading': '',
            'open': {
                'off': '',
                'on': 'text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-white'
            }
        }
    },
    navbar: {
        'root': {
            'base': 'bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-black sm:px-4 fixed w-full z-50',
            'rounded': {
                'on': 'rounded',
                'off': ''
            },
            'bordered': {
                'on': 'border',
                'off': ''
            },
            'inner': {
                'base': 'mx-auto flex flex-wrap items-center justify-between',
                'fluid': {
                    'on': '',
                    'off': 'container'
                }
            }
        },
        'brand': {
            'base': 'flex items-center'
        },
        'collapse': {
            'base': 'w-full md:block md:w-auto',
            'list': 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium',
            'hidden': {
                'on': '',
                'off': ''
            }
        },
        'link': {
            'base': 'block py-2 pr-4 pl-3 md:p-0',
            'active': {
                'on': 'bg-blue-700 text-white rounded dark:text-white md:bg-transparent md:text-cyan-700',
                'off': 'border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white'
            },
            'disabled': {
                'on': 'text-gray-400 hover:cursor-not-allowed dark:text-gray-600',
                'off': ''
            }
        },
        'toggle': {
            'base': 'ml-2 mr-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden',
            'icon': 'h-6 w-6 shrink-0'
        }
    },
    dropdown: {
        'arrowIcon': 'ml-2 h-4 w-4',
        'content': 'py-1 focus:outline-none',
        'floating': {
            'animation': 'transition-opacity',
            'arrow': {
                'base': 'absolute z-10 h-2 w-2 rotate-45',
                'style': {
                    'dark': 'bg-gray-900 dark:bg-gray-700',
                    'light': 'bg-white',
                    'auto': 'bg-white dark:bg-gray-700'
                },
                'placement': '-4px'
            },
            'base': 'z-10 w-fit rounded divide-y divide-gray-100 shadow focus:outline-none',
            'content': 'py-1 text-sm text-gray-700 dark:text-gray-200',
            'divider': 'my-1 h-px bg-gray-100 dark:bg-gray-600',
            'header': 'block py-2 px-4 text-sm text-gray-700 dark:text-gray-200',
            'hidden': 'invisible opacity-0',
            'item': {
                'container': '',
                'base': 'flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white',
                'icon': 'mr-2 h-4 w-4'
            },
            'style': {
                'dark': 'bg-gray-900 text-white dark:bg-black',
                'light': 'border border-gray-200 bg-white text-gray-900',
                'auto': 'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white'
            },
            'target': 'w-fit'
        },
        'inlineWrapper': 'flex items-center'
    }
}