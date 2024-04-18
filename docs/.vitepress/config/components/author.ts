
type Author = {
    name:string,
    icon?:string,
    link:string,
}

export const authors:Record<string,Author> = {
    'Glomzzz': {
        name: 'Glomzzz',
        icon: '/assets/owner.png',
        link: '/about/me',
    }
}

export const defaultAuthor = authors['Glomzzz']
