import githubImage from '../../../public/github.png'
import plumeoImage from '../../../public/plumeo.png'
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
            description: 'project.ghpull.description',
            link: { href: 'https://github.com/Shawiizz/github-auto-pull', image: githubImage }
        },
        {
            name: 'ShaLibUpdate',
            description: 'project.autodl.description',
            link: { href: 'https://github.com/Shawiizz/ShaLibUpdate', image: githubImage }
        },
        {
            name: 'Minecraft Assets Downloader',
            description: 'project.assetsdl.description',
            link: { href: 'https://github.com/Shawiizz/MinecraftAssetsDownloader', image: githubImage }
        },
        {
            name: 'LLA Menu Story',
            description: 'project.lla.description',
            link: { href: 'https://github.com/Shawiizz/lla-menu-story', image: githubImage }
        },
        {
            name: 'PufferPanel API Wrapper',
            description: 'project.pufferpanel.description',
            link: { href: 'https://github.com/Shawiizz/pufferpanel-api-wrapper', image: githubImage }
        },
        {
            name: 'Tomuss API',
            description: 'project.tomuss.description',
            link: { href: 'https://github.com/Shawiizz/tomuss-api', image: githubImage }
        },
        {
            name: "MohistMC's website",
            description: "project.mohistweb.description",
            link: { href: 'https://github.com/MohistMC/website', image: githubImage }
        }
    ],
    team: [
        {
            name: 'Mohist',
            description: 'project.mohist.description',
            link: { href: 'https://github.com/MohistMC/Mohist', image: githubImage }
        },
        {
            name: 'Pluméo',
            description: 'project.plumeo.description',
            link: { href: 'https://vrock691.web.app', image: plumeoImage }
        }
    ]
}
