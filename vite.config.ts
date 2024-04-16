
import { defineConfig } from 'vite'
import {
    GitChangelog,
    GitChangelogMarkdownSection,
// @ts-ignore
} from '@nolebase/vitepress-plugin-git-changelog/vite'

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