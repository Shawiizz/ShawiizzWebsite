import { HiCode, HiDesktopComputer } from 'react-icons/hi'
import { IoIosSettings } from 'react-icons/io'
import { FaDatabase } from 'react-icons/fa'
import { IoLibrary } from 'react-icons/io5'
import androidstudiodark from '../../../public/skill-icon/AndroidStudio-Dark.svg'
import androidstudiowhite from '../../../public/skill-icon/AndroidStudio-Light.svg'
import arduino from '../../../public/skill-icon/Arduino.svg'
import bashdark from '../../../public/skill-icon/Bash-Dark.svg'
import bashwhite from '../../../public/skill-icon/Bash-Light.svg'
import c from '../../../public/skill-icon/C.svg'
import cloudflaredark from '../../../public/skill-icon/Cloudflare-Dark.svg'
import cloudflarewhite from '../../../public/skill-icon/Cloudflare-Light.svg'
import css from '../../../public/skill-icon/CSS.svg'
import dartdark from '../../../public/skill-icon/Dart-Dark.svg'
import dartwhite from '../../../public/skill-icon/Dart-Light.svg'
import electron from '../../../public/skill-icon/Electron.svg'
import expressdark from '../../../public/skill-icon/ExpressJS-Dark.svg'
import expresswhite from '../../../public/skill-icon/ExpressJS-Light.svg'
import figmadark from '../../../public/skill-icon/Figma-Dark.svg'
import figmalight from '../../../public/skill-icon/Figma-Light.svg'
import flutterdark from '../../../public/skill-icon/Flutter-Dark.svg'
import flutterlight from '../../../public/skill-icon/Flutter-Light.svg'
import git from '../../../public/skill-icon/Git.svg'
import githubdark from '../../../public/skill-icon/Github-Dark.svg'
import githublight from '../../../public/skill-icon/Github-Light.svg'
import gradledark from '../../../public/skill-icon/Gradle-Dark.svg'
import gradlelight from '../../../public/skill-icon/Gradle-Light.svg'
import html from '../../../public/skill-icon/HTML.svg'
import ideadark from '../../../public/skill-icon/Idea-Dark.svg'
import idealight from '../../../public/skill-icon/Idea-Light.svg'
import javadark from '../../../public/skill-icon/Java-Dark.svg'
import javalight from '../../../public/skill-icon/Java-Light.svg'
import js from '../../../public/skill-icon/JavaScript.svg'
import linuxdark from '../../../public/skill-icon/Linux-Dark.svg'
import linuxlight from '../../../public/skill-icon/Linux-Light.svg'
import markdowndark from '../../../public/skill-icon/Markdown-Dark.svg'
import markdownlight from '../../../public/skill-icon/Markdown-Light.svg'
import mongodb from '../../../public/skill-icon/MongoDB.svg'
import mysqldark from '../../../public/skill-icon/MySQL-Dark.svg'
import mysqllight from '../../../public/skill-icon/MySQL-Light.svg'
import nextjsdark from '../../../public/skill-icon/NextJS-Dark.svg'
import nextjslight from '../../../public/skill-icon/NextJS-Light.svg'
import nginx from '../../../public/skill-icon/Nginx.svg'
import nodejsdark from '../../../public/skill-icon/NodeJS-Dark.svg'
import nodejslight from '../../../public/skill-icon/NodeJS-Light.svg'
import phpdark from '../../../public/skill-icon/PHP-Dark.svg'
import phplight from '../../../public/skill-icon/PHP-Light.svg'
import postgresdark from '../../../public/skill-icon/PostgreSQL-Dark.svg'
import postgreslight from '../../../public/skill-icon/PostgreSQL-Light.svg'
import pydark from '../../../public/skill-icon/Python-Dark.svg'
import pylight from '../../../public/skill-icon/Python-Light.svg'
import raspberrypidark from '../../../public/skill-icon/RaspberryPi-Dark.svg'
import raspberrypilight from '../../../public/skill-icon/RaspberryPi-Light.svg'
import reactdark from '../../../public/skill-icon/React-Dark.svg'
import reactlight from '../../../public/skill-icon/React-Light.svg'
import symfonydark from '../../../public/skill-icon/Symfony-Dark.svg'
import symfonylight from '../../../public/skill-icon/Symfony-Light.svg'
import tailwinddark from '../../../public/skill-icon/TailwindCSS-Dark.svg'
import tailwindlight from '../../../public/skill-icon/TailwindCSS-Light.svg'
import ts from '../../../public/skill-icon/TypeScript.svg'
import vscodedark from '../../../public/skill-icon/VSCode-Dark.svg'
import vscodelight from '../../../public/skill-icon/VSCode-Light.svg'
import vuedark from '../../../public/skill-icon/VueJS-Dark.svg'
import vuelight from '../../../public/skill-icon/VueJS-Light.svg'
import { IconType } from 'react-icons'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export interface TechnologyType {
    displayName: 'tech.type.language' | 'tech.type.framework' | 'tech.type.tool' | 'tech.type.database' | 'tech.type.software',
    icon: IconType
}

export const TECHNOLOGIES_TYPES: Record<string, TechnologyType> = {
    language: {
        displayName: 'tech.type.language',
        icon: HiCode
    },
    framework: {
        displayName: 'tech.type.framework',
        icon: IoLibrary
    },
    tool: {
        displayName: 'tech.type.tool',
        icon: IoIosSettings
    },
    database: {
        displayName: 'tech.type.database',
        icon: FaDatabase
    },
    software: {
        displayName: 'tech.type.software',
        icon: HiDesktopComputer
    }
}

export type TechnologyDisplayName = 'tech.level.beginner' | 'tech.level.intermediate' | 'tech.level.advanced';

export interface TechnologyLevel {
    displayName: TechnologyDisplayName,
    level: number
}

export const technologyLevels: Record<string, TechnologyLevel> = {
    beginner: {
        displayName: 'tech.level.beginner',
        level: 1
    },
    intermediate: {
        displayName: 'tech.level.intermediate',
        level: 2
    },
    advanced: {
        displayName: 'tech.level.advanced',
        level: 3
    }
}

export type TechnologyTypeKeys = keyof typeof TECHNOLOGIES_TYPES;

export interface Technology {
    displayName: string,
    icon: {
        dark: StaticImport,
        white: StaticImport
    },
    type: TechnologyTypeKeys[],
    level: keyof typeof technologyLevels
}

export const technologies: Technology[] = [
    {
        displayName: 'Android Studio',
        icon: {
            dark: androidstudiodark,
            white: androidstudiowhite
        },
        type: ['software'],
        level: 'beginner'
    },
    {
        displayName: 'Arduino',
        icon: {
            dark: arduino,
            white: arduino
        },
        type: ['software', 'language'],
        level: 'intermediate'
    },
    {
        displayName: 'Bash',
        icon: {
            dark: bashdark,
            white: bashwhite
        },
        type: ['software'],
        level: 'advanced'
    },
    {
        displayName: 'C',
        icon: {
            dark: c,
            white: c
        },
        type: ['language'],
        level: 'intermediate'
    },
    {
        displayName: 'CloudFlare',
        icon: {
            dark: cloudflaredark,
            white: cloudflarewhite
        },
        type: ['tool'],
        level: 'intermediate'
    },
    {
        displayName: 'CSS',
        icon: {
            dark: css,
            white: css
        },
        type: ['language'],
        level: 'advanced'
    },
    {
        displayName: 'Dart',
        icon: {
            dark: dartdark,
            white: dartwhite
        },
        type: ['language'],
        level: 'beginner'
    },
    {
        displayName: 'ElectronJS',
        icon: {
            dark: electron,
            white: electron
        },
        type: ['framework'],
        level: 'beginner'
    },
    {
        displayName: 'ExpressJS',
        icon: {
            dark: expressdark,
            white: expresswhite
        },
        type: ['framework'],
        level: 'intermediate'
    },
    {
        displayName: 'Figma',
        icon: {
            dark: figmadark,
            white: figmalight
        },
        type: ['tool'],
        level: 'intermediate'
    },
    {
        displayName: 'Flutter',
        icon: {
            dark: flutterdark,
            white: flutterlight
        },
        type: ['language'],
        level: 'beginner'
    },
    {
        displayName: 'Git',
        icon: {
            dark: git,
            white: git
        },
        type: ['tool'],
        level: 'advanced'
    },
    {
        displayName: 'GitHub',
        icon: {
            dark: githubdark,
            white: githublight
        },
        type: ['tool'],
        level: 'advanced'
    },
    {
        displayName: 'Gradle',
        icon: {
            dark: gradledark,
            white: gradlelight
        },
        type: ['tool'],
        level: 'advanced'
    },
    {
        displayName: 'HTML',
        icon: {
            dark: html,
            white: html
        },
        type: ['language'],
        level: 'advanced'
    },
    {
        displayName: 'IntelliJ IDEA',
        icon: {
            dark: ideadark,
            white: idealight
        },
        type: ['software'],
        level: 'advanced'
    },
    {
        displayName: 'Java',
        icon: {
            dark: javadark,
            white: javalight
        },
        type: ['language'],
        level: 'advanced'
    },
    {
        displayName: 'JavaScript',
        icon: {
            dark: js,
            white: js
        },
        type: ['language'],
        level: 'advanced'
    },
    {
        displayName: 'Linux',
        icon: {
            dark: linuxdark,
            white: linuxlight
        },
        type: ['software', 'tool'],
        level: 'advanced'
    },
    {
        displayName: 'Markdown',
        icon: {
            dark: markdowndark,
            white: markdownlight
        },
        type: ['tool'],
        level: 'advanced'
    },
    {
        displayName: 'MongoDB',
        icon: {
            dark: mongodb,
            white: mongodb
        },
        type: ['database'],
        level: 'beginner'
    },
    {
        displayName: 'MySQL',
        icon: {
            dark: mysqldark,
            white: mysqllight
        },
        type: ['database'],
        level: 'advanced'
    },
    {
        displayName: 'NextJS',
        icon: {
            dark: nextjsdark,
            white: nextjslight
        },
        type: ['framework'],
        level: 'advanced'
    },
    {
        displayName: 'Nginx',
        icon: {
            dark: nginx,
            white: nginx
        },
        type: ['software', 'tool'],
        level: 'advanced'
    },
    {
        displayName: 'NodeJS',
        icon: {
            dark: nodejsdark,
            white: nodejslight
        },
        type: ['language'],
        level: 'advanced'
    },
    {
        displayName: 'PHP',
        icon: {
            dark: phpdark,
            white: phplight
        },
        type: ['language'],
        level: 'intermediate'
    },
    {
        displayName: 'PostgreSQL',
        icon: {
            dark: postgresdark,
            white: postgreslight
        },
        type: ['database'],
        level: 'intermediate'
    },
    {
        displayName: 'Python',
        icon: {
            dark: pydark,
            white: pylight
        },
        type: ['language'],
        level: 'intermediate'
    },
    {
        displayName: 'Raspberry PI',
        icon: {
            dark: raspberrypidark,
            white: raspberrypilight
        },
        type: ['software', 'tool'],
        level: 'intermediate'
    },
    {
        displayName: 'React',
        icon: {
            dark: reactdark,
            white: reactlight
        },
        type: ['framework'],
        level: 'advanced'
    },
    {
        displayName: 'Symfony',
        icon: {
            dark: symfonydark,
            white: symfonylight
        },
        type: ['framework'],
        level: 'beginner'
    },
    {
        displayName: 'TailwindCSS',
        icon: {
            dark: tailwinddark,
            white: tailwindlight
        },
        type: ['framework'],
        level: 'advanced'
    },
    {
        displayName: 'TypeScript',
        icon: {
            dark: ts,
            white: ts
        },
        type: ['language'],
        level: 'advanced'
    },
    {
        displayName: 'Visual Studio Code',
        icon: {
            dark: vscodedark,
            white: vscodelight
        },
        type: ['software'],
        level: 'advanced'
    },
    {
        displayName: 'VueJS',
        icon: {
            dark: vuedark,
            white: vuelight
        },
        type: ['framework'],
        level: 'beginner'
    }
]