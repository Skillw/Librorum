
import { defineConfig } from 'vite'
import {
    GitChangelog,
    GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/dist/vite'

export default defineConfig(() => {
    return {
        plugins: [
            GitChangelog({
                repoURL: () => 'https://github.com/Glomzzz/Librorum',
            }),
            GitChangelogMarkdownSection(),
        ]
    }
})