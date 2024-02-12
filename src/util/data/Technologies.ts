import { HiCode, HiDesktopComputer } from 'react-icons/hi'
import { IoIosSettings } from 'react-icons/io'
import { FaDatabase } from 'react-icons/fa'
import { IoLibrary } from 'react-icons/io5'

export interface TechnologyType {
    displayName: 'tech.type.language' | 'tech.type.framework' | 'tech.type.tool' | 'tech.type.database' | 'tech.type.software',
    icon: any
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
    },
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
    icon: string,
    type: TechnologyTypeKeys[],
    level: keyof typeof technologyLevels
}

export const technologies: Technology[] = [
    {
        displayName: "Android Studio",
        icon: "androidstudio",
        type: ['software'],
        level: 'beginner'
    },
    {
        displayName: 'Arduino',
        icon: 'arduino',
        type: ['software', 'language'],
        level: 'intermediate'
    },
    {
        displayName: 'Bash',
        icon: 'bash',
        type: ['software'],
        level: 'advanced'
    },
    {
        displayName: 'C',
        icon: 'c',
        type: ['language'],
        level: 'intermediate'
    },
    {
        displayName: 'CloudFlare',
        icon: 'cloudflare',
        type: ['tool'],
        level: 'intermediate'
    },
    {
        displayName: 'CSS',
        icon: 'css',
        type: ['language'],
        level: 'advanced'
    },
    {
        displayName: 'Dart',
        icon: 'dart',
        type: ['language'],
        level: 'beginner'
    },
    {
        displayName: 'ElectronJS',
        icon: 'electron',
        type: ['framework'],
        level: 'beginner'
    },
    {
        displayName: 'ExpressJS',
        icon: 'express',
        type: ['framework'],
        level: 'intermediate'
    },
    {
        displayName: 'Figma',
        icon: 'figma',
        type: ['tool'],
        level: 'intermediate'
    },
    {
        displayName: 'Flutter',
        icon: 'flutter',
        type: ['language'],
        level: 'beginner'
    },
    {
        displayName: 'Git',
        icon: 'git',
        type: ['tool'],
        level: 'advanced'
    },
    {
        displayName: 'GitHub',
        icon: 'github',
        type: ['tool'],
        level: 'advanced'
    },
    {
        displayName: 'Gradle',
        icon: 'gradle',
        type: ['tool'],
        level: 'advanced'
    },
    {
        displayName: 'HTML',
        icon: 'html',
        type: ['language'],
        level: 'advanced'
    },
    {
        displayName: 'IntelliJ IDEA',
        icon: 'idea',
        type: ['software'],
        level: 'advanced'
    },
    {
        displayName: 'Java',
        icon: 'java',
        type: ['language'],
        level: 'advanced'
    },
    {
        displayName: 'JavaScript',
        icon: 'js',
        type: ['language'],
        level: 'advanced'
    },
    {
        displayName: 'Linux',
        icon: 'linux',
        type: ['software', 'tool'],
        level: 'advanced'
    },
    {
        displayName: 'Markdown',
        icon: 'md',
        type: ['tool'],
        level: 'advanced'
    },
    {
        displayName: 'MongoDB',
        icon: 'mongodb',
        type: ['database'],
        level: 'beginner'
    },
    {
        displayName: 'MySQL',
        icon: 'mysql',
        type: ['database'],
        level: 'advanced'
    },
    {
        displayName: 'NextJS',
        icon: 'nextjs',
        type: ['framework'],
        level: 'advanced'
    },
    {
        displayName: 'Nginx',
        icon: 'nginx',
        type: ['software', 'tool'],
        level: 'advanced'
    },
    {
        displayName: 'NodeJS',
        icon: 'nodejs',
        type: ['language'],
        level: 'advanced'
    },
    {
        displayName: 'PHP',
        icon: 'php',
        type: ['language'],
        level: 'intermediate'
    },
    {
        displayName: 'PostgreSQL',
        icon: 'postgres',
        type: ['database'],
        level: 'intermediate'
    },
    {
        displayName: 'Python',
        icon: 'py',
        type: ['language'],
        level: 'intermediate'
    },
    {
        displayName: 'Raspberry PI',
        icon: 'raspberrypi',
        type: ['software', 'tool'],
        level: 'intermediate'
    },
    {
        displayName: 'React',
        icon: 'react',
        type: ['framework'],
        level: 'advanced'
    },
    {
        displayName: 'Symfony',
        icon: 'symfony',
        type: ['framework'],
        level: 'beginner'
    },
    {
        displayName: 'TailwindCSS',
        icon: 'tailwind',
        type: ['framework'],
        level: 'advanced'
    },
    {
        displayName: 'TypeScript',
        icon: 'ts',
        type: ['language'],
        level: 'advanced'
    },
    {
        displayName: 'Visual Studio Code',
        icon: 'vscode',
        type: ['software'],
        level: 'advanced'
    },
    {
        displayName: 'VueJS',
        icon: 'vue',
        type: ['framework'],
        level: 'beginner'
    },
]