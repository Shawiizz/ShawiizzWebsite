import githubImage from '../../public/github.png'
import plumeoImage from '../../public/plumeo.png'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export interface Project {
    name: string;
    description: string;
    link: { href: string; image: StaticImport };
}

export interface Projects {
    personal: Project[];
    team: Project[];
}

export const projects: Projects = {
    personal: [
        {
            name: 'Github auto pull',
            description: 'Github auto pull is an open source project that can synchronize a GitHub repository in a local directory.',
            link: { href: 'https://github.com/Shawiizz/github-auto-pull', image: githubImage }
        },
        {
            name: 'ShaLibUpdate',
            description: 'An open source project that enables automation of file downloads from a server with a file checker.',
            link: { href: 'https://github.com/Shawiizz/ShaLibUpdate', image: githubImage }
        },
        {
            name: 'Minecraft Assets Downloader',
            description: 'An open source project that enables developers to download Minecraft assets.',
            link: { href: 'https://github.com/Shawiizz/MinecraftAssetsDownloader', image: githubImage }
        },
        {
            name: 'LLA Menu Story',
            description: 'A tiny high school project that uploads an Instagram story of the self-menu of the week.',
            link: { href: 'https://github.com/Shawiizz/lla-menu-story', image: githubImage }
        }
    ],
    team: [
        {
            name: 'Mohist',
            description: 'Mohist is an open source Minecraft server software supporting Forge mods and Bukkit/Spigot plugins in the same server.',
            link: { href: 'https://github.com/MohistMC/Mohist', image: githubImage }
        },
        {
            name: 'Pluméo',
            description: 'Pluméo is a social network project, which is private for now. I am working on it with my friend, Vrock691.',
            link: { href: 'https://vrock691.web.app', image: plumeoImage }
        }
    ]
}
