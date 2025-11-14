import { defineConfig } from 'relizy'

export default defineConfig({
  cwd: './',
  types: {
    feat: { title: '🚀 Features', semver: 'minor' },
    perf: { title: '🔥 Performance', semver: 'patch' },
    fix: { title: '🩹 Fixes', semver: 'patch' },
    refactor: { title: '💅 Refactors', semver: 'patch' },
    types: { title: '🌊 Types', semver: 'patch' },
    style: { title: '💄 Styles', semver: 'patch' },
    docs: { title: '📖 Documentation' },
    test: { title: '🧪 Tests' },
    chore: false,
    examples: false,
    ci: false,
    build: false,
  },

  monorepo: {
    versionMode: 'independent',
    packages: ['./packages/*'],
  },

  release: {
    publish: false,
  },
})
