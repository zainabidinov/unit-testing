import globals from "globals";
import pluginJs from "@eslint/js";

import path from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended })


export default [
  {languageOptions: { globals: globals.node },
  ignores: ["**/node_modules/, **/mochawesome-report/", "**/coverage/"]},
  pluginJs.configs.recommended,
];