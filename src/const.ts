type EnvironmentType = 'dev' | 'prd'

// make suire that prettier does not convert ' to ", we rely on it in prepare.sh script
// prettier-ignore
const ENVIRONMENT: EnvironmentType = 'dev' // The ENVIRONMENT value is set during CI/CD

// silent ts linter
// @ts-ignore
const MENU_TITLE = ENVIRONMENT === 'dev' ? 'DEVELOPMENT' : 'Custom Menu'
