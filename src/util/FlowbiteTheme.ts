import { CustomFlowbiteTheme } from 'flowbite-react'

export const flowbiteTheme: CustomFlowbiteTheme = {
    pagination: {
        "base": "",
        "layout": {
            "table": {
                "base": "text-sm text-gray-700",
                "span": "font-semibold text-gray-900"
            }
        },
        "pages": {
            "base": "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
            "showIcon": "inline-flex",
            "previous": {
                "base": "ml-0 rounded-l-lg border border-white bg-transparent py-2 px-3 leading-tight text-white",
                "icon": "h-5 w-5"
            },
            "next": {
                "base": "rounded-r-lg border border-white bg-transparent py-2 px-3 leading-tight text-white",
                "icon": "h-5 w-5"
            },
            "selector": {
                "base": "w-12 border border-gray-300 bg-transparent py-2 leading-tight text-white hover:bg-cyan-100 hover:text-cyan-700",
                "active": "bg-transparent text-white",
                "disabled": "opacity-50 cursor-normal"
            }
        }
    },
    card: {
        "root": {
            "base": "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-800 dark:bg-gray-900 h-fit",
            "children": "flex flex-col gap-4 p-6",
            "horizontal": {
                "off": "flex-col",
                "on": "flex-col md:max-w-xl md:flex-row"
            },
            "href": "hover:bg-gray-100 dark:hover:bg-gray-800"
        },
        "img": {
            "base": "",
            "horizontal": {
                "off": "rounded-t-lg",
                "on": "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            }
        }
    }
}