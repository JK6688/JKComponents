import { defineOxlintConfig } from './src/hooks/defineOxlintConfig.ts';

export default defineOxlintConfig((config) => {
  return {
    ...config,
    $schema: './node_modules/oxlint/configuration_schema.json'
  };
});
